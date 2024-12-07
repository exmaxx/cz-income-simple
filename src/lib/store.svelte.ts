import type { CalculationResultsEmployee, CalculationResultsFreelancer } from '$lib/types'

interface AppStore {
	income: {
		freelancer: CalculationResultsFreelancer | null
		employee: CalculationResultsEmployee | null
	}
}

const appStore: AppStore = $state({
	income: {
		freelancer: null,
		employee: null,
	},
})

export default appStore
