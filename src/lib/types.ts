import type { NetIncomeResults, NetSalaryResults } from '@exmaxx/cz-income-lib'

type ContributionsEmployee = Omit<NetSalaryResults, 'netSalary'>

type ContributionsFreelancer = Omit<NetIncomeResults, 'netIncome'>

interface CalculationResultsBase {
	gross: number
	net: number
}

export interface CalculationResultsEmployee extends CalculationResultsBase {
	contributions: ContributionsEmployee
}

export interface CalculationResultsFreelancer extends CalculationResultsBase {
	contributions: ContributionsFreelancer
}

export interface Result {
	freelancer: CalculationResultsFreelancer
	employee: CalculationResultsEmployee
}
