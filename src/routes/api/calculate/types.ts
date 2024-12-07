import type { CalculationResults } from '$lib/types'

export interface CalculationCombinedResults {
	freelancer: CalculationResults
	employee: CalculationResults
}
