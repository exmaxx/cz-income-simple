import type { CalculationResults } from '$lib/types'

export const appState = $state({
	income: {
		freelancer: null as unknown as CalculationResults, // FIXME: Heavily temporary.
		employee: null  as unknown as CalculationResults // FIXME: Heavily temporary.
	},
})
