import appStore from '$lib/store/store.svelte.js'

export async function fetchIncomeOverview(monthlyNetIncome: number) {
	const yearlyNetIncome = monthlyNetIncome * 12

	const response: Response = await fetch('/api/calculate', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ yearlyNetIncome }),
	})

	appStore.income = await response.json()
}
