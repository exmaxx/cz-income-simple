import { json, type RequestHandler } from '@sveltejs/kit'
import { calcOverview } from './calculator'

export const POST: RequestHandler = async ({ request }) => {
	const { yearlyNetIncome } = await request.json()

	if (!yearlyNetIncome) {
		// TODO: Throw.
	}

	const overview = calcOverview(yearlyNetIncome)

	return json(overview)
}
