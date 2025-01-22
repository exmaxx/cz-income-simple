import resultsStore from '$lib/stores/results.svelte.js'

export async function fetchIncomeOverview(monthlyNetIncome: number) {
	const yearlyNetIncome = monthlyNetIncome * 12

	const response: Response = await fetch('/api/calculate', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ yearlyNetIncome }),
	})

	resultsStore.income = await response.json()
}
