import type { OverviewData } from '$lib/types'
import { Api } from '$lib/services/api'

export interface OverviewResult {
	error?: string
	overview: OverviewData | null
}

interface ResponseJson {
	overview: OverviewData
}

export default class CalculationApi {
	api: Api
	static cache: Map<number, OverviewResult> = new Map()

	constructor(fetch: typeof globalThis.fetch) {
		this.api = new Api('/api', fetch)
	}

	async fetchOverview(monthlyIncome: number): Promise<OverviewResult> {
		const cachedOverview = this.getCached(monthlyIncome)

		if (cachedOverview) {
			return {
				overview: cachedOverview.overview,
			}
		}

		const response = await this.api.post('/overview', { yearlyNetIncome: monthlyIncome * 12 })

		if (!response.ok) {
			return {
				error: `Data load failed (${response.status} ${response.statusText})`,
				overview: null,
			}
		}

		const { overview }: ResponseJson = await response.json()

		const result = {
			overview,
		}

		this.addToCache(monthlyIncome, result)

		return result
	}

	getCached(monthlyIncome: number): OverviewResult | undefined {
		return CalculationApi.cache.get(monthlyIncome)
	}

	addToCache(monthlyIncome: number, result: OverviewResult) {
		CalculationApi.cache.set(monthlyIncome, result)
	}
}
