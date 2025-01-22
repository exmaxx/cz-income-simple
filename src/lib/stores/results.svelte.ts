import type { CalculationResultsEmployee, CalculationResultsFreelancer } from '$lib/types'

interface Store {
	income: {
		freelancer: CalculationResultsFreelancer | null
		employee: CalculationResultsEmployee | null
	}
}

const resultsStore: Store = $state({
	income: {
		freelancer: null,
		employee: null,
	},
})

export default resultsStore
