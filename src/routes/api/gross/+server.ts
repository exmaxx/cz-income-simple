import { json, type RequestHandler } from '@sveltejs/kit'
import { calcGrossIncome } from './calculator'

export const POST: RequestHandler = async ({ request }) => {
	const { incomeMonthly } = await request.json()

	return json(calcGrossIncome(incomeMonthly))
}
