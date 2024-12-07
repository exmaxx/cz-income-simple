import type { CalculationResultsEmployee, CalculationResultsFreelancer } from '$lib/types'

export interface CalculationCombinedResults {
	freelancer: CalculationResultsFreelancer
	employee: CalculationResultsEmployee
}
