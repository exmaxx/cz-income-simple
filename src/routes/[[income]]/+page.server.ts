import { type Actions, redirect } from '@sveltejs/kit'

export const actions = {
	// Called when JS disabled
	default: async ({ request }) => {
		const formData = await request.formData()
		const incomeMonthly = formData.get('incomeMonthlyValue')

		redirect(303, `/${incomeMonthly}`)
	},
} satisfies Actions
