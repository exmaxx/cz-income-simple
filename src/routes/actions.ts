import { appState } from './store.svelte'

export async function fetchNetIncome(incomeMonthly: number) {
	const response: Response = await fetch('/api/gross', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ incomeMonthly }),
	})

	appState.income = await response.json()
}
