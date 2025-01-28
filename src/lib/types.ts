import type { NetIncomeResults, NetSalaryResults } from '@exmaxx/cz-income-lib'

type ContributionsEmployee = Omit<NetSalaryResults, 'netSalary'>

type ContributionsFreelancer = Omit<NetIncomeResults, 'netIncome'>

interface OverviewBase {
	gross: number
	net: number
}

export interface OverviewEmployee extends OverviewBase {
	contributions: ContributionsEmployee
}

export interface OverviewFreelancer extends OverviewBase {
	contributions: ContributionsFreelancer
}

export interface OverviewData {
	freelancer: OverviewFreelancer
	employee: OverviewEmployee
}
