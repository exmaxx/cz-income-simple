import type { CalculationResultsFreelancer } from '$lib/types'

export const appState = $state({
	income: {
		freelancer: null as CalculationResultsFreelancer | null,
		employee: null as CalculationResultsFreelancer | null,
	},
})
