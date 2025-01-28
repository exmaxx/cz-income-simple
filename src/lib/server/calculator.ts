import {
	calculateEmployeeGrossSalary,
	calculateEmployeeNetSalary,
	calculateFreelancerGrossIncome,
	calculateFreelancerNetIncome,
} from '@exmaxx/cz-income-lib'
import { employeeRates, freelancerRates } from './rates'
import type { OverviewData } from '$lib/types'

function calculateFreelancerOverview(yearlyNetIncome: number) {
	const gross = calculateFreelancerGrossIncome(
		yearlyNetIncome,
		{ percentage: 0.6 }, // TODO: Make configurable.
		freelancerRates
	)

	const freelancerNetAndContributions = calculateFreelancerNetIncome(
		gross,
		{ percentage: 0.6 },
		freelancerRates
	)

	const { netIncome: net, ...contributions } = freelancerNetAndContributions

	return { gross, net, contributions }
}

function calculateEmployeeOverview(yearlyNetIncome: number) {
	const gross = calculateEmployeeGrossSalary(yearlyNetIncome, employeeRates)

	const employeeNetAndContributions = calculateEmployeeNetSalary(gross, employeeRates)

	const { netSalary: net, ...contributions } = employeeNetAndContributions

	return { gross, net, contributions }
}

export function calcOverview(yearlyNetIncome: number): OverviewData {
	return {
		freelancer: calculateFreelancerOverview(yearlyNetIncome),
		employee: calculateEmployeeOverview(yearlyNetIncome),
	}
}
