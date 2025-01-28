import type { PageLoad } from './$types'
import CalculationApi, { type OverviewResult } from '$lib/services/calulationApi'

export const load: PageLoad = async ({ params, fetch }) => {
	const income = Number(params.income)

	if (!income) {
		return
	}

	return fetchOverview(income, fetch)
}

async function fetchOverview(
	income: number,
	fetch: typeof globalThis.fetch
): Promise<OverviewResult> {
	const calculationApi = new CalculationApi(fetch)

	return calculationApi.fetchOverview(income)
}
