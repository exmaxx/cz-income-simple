import { error, json, type RequestHandler } from '@sveltejs/kit'
import { calcOverview } from '$lib/server/calculator'
import type { OverviewData } from '$lib/types'

interface RequestBody {
	yearlyNetIncome: number
}

export interface ResponseData {
	error?: string
	overview: OverviewData | null
}

export const POST: RequestHandler = async ({ request }) => {
	const { yearlyNetIncome } = (await request.json()) as RequestBody

	if (!yearlyNetIncome) {
		error(400, {
			message: 'Missing `yearlyNetIncome` parameter in body.',
		})
	}

	try {
		const overview = calcOverview(yearlyNetIncome)
		const data: ResponseData = { overview }

		return json(data)
	} catch (e: unknown) {
		const data: ResponseData = { error: (e as Error).message, overview: null }

		return json(data)
	}
}
