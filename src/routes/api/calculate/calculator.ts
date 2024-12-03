import {
	calculateEmployeeGrossSalary,
	calculateEmployeeNetSalary,
	calculateFreelancerGrossIncome,
	calculateFreelancerNetIncome,
} from '@exmaxx/cz-income-lib'
import { employeeRates, freelancerRates } from './rates'
import type { CalculationCombinedResults } from './types'

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

	const { netIncome, reachedThresholds, ...contributions } = freelancerNetAndContributions

	return { gross, net: netIncome, reachedThresholds, contributions }
}

function calculateEmployeeOverview(yearlyNetIncome: number) {
	const gross = calculateEmployeeGrossSalary(yearlyNetIncome, employeeRates)

	const employeeNetAndContributions = calculateEmployeeNetSalary(gross, employeeRates)

	const { netSalary: net, reachedThresholds, ...contributions } = employeeNetAndContributions

	return { gross, net, reachedThresholds, contributions }
}

export function calcOverview(yearlyNetIncome: number): CalculationCombinedResults {
	return {
		freelancer: calculateFreelancerOverview(yearlyNetIncome),
		employee: calculateEmployeeOverview(yearlyNetIncome),
	}
}
