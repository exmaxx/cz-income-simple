import type { OverviewData } from '$lib/types'
import { Api } from '$lib/services/api'
import type { ResponseData } from '../../routes/api/overview/+server'

export interface OverviewResult {
	error?: string
	overview: OverviewData | null
}

export default class CalculationApi {
	api: Api
	static cache: Map<number, OverviewData> = new Map()

	constructor(fetch: typeof globalThis.fetch) {
		this.api = new Api('/api', fetch)
	}

	async fetchOverview(monthlyIncome: number): Promise<OverviewResult> {
		const cachedOverview = this.getCached(monthlyIncome)

		if (cachedOverview) {
			return {
				overview: cachedOverview,
			}
		}

		const response = await this.api.post('/overview', { yearlyNetIncome: monthlyIncome * 12 })

		if (!response.ok) {
			return {
				error: `Data load failed (${response.status} ${response.statusText})`,
				overview: null,
			}
		}

		const { error, overview }: ResponseData = await response.json()

		if (!error && overview) {
			this.addToCache(monthlyIncome, overview)
		}

		return {
			error,
			overview,
		}
	}

	getCached(monthlyIncome: number): OverviewData | undefined {
		return CalculationApi.cache.get(monthlyIncome)
	}

	addToCache(monthlyIncome: number, result: OverviewData) {
		CalculationApi.cache.set(monthlyIncome, result)
	}
}
