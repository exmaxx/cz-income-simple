import { calculateEmployeeGrossSalary, calculateFreelancerGrossIncome } from '@exmaxx/cz-income-lib'
import type { Rates as EmployeeRates } from '@exmaxx/cz-income-lib/dist/lib/esm/employee/types'
import type { Rates as FreelancerRates } from '@exmaxx/cz-income-lib/dist/lib/esm/freelancer/types'

// For 2024
const MIN_SALARY_MONTHLY = 18900 // per month
const AVG_SALARY_MONTHLY = 43967 // per month

const commonIncomeRates = {
	credit: 30840,
	highRate: 0.23, // 23%
	highRateThreshold: AVG_SALARY_MONTHLY * 36, // 36-times average salary per year (or 3-times the average salary per month)
	rate: 0.15, // 15%
}

const employeeRates: EmployeeRates = {
	healthRates: {
		employeeRate: 0.045, // 4.5%
		employerRate: 0.09, // 9%
		minAmount: 0, // is calculated below
	},

	incomeRates: {
		...commonIncomeRates,
		minSalary: MIN_SALARY_MONTHLY * 12,
	},

	socialRates: {
		employeeRate: 0.071, // 7.1% (sickness 0.6%, pension 6.5%, unemployment 0%)
		employerRate: 0.248, // 24.8% (sickness 2.1%, pension 21.5%, unemployment 1.2%)
		maxBase: AVG_SALARY_MONTHLY * 48, // 48-times average salary per year
	},
}

const freelancerRates: FreelancerRates = {
	incomeRates: {
		...commonIncomeRates,
		nonTaxable: 0,
	},

	healthRates: {
		basePercentage: 0.5, // 50%
		minBase: 20162 * 12, // FIXME: Is this base on average salary or something?
		rate: 0.135, // 13.5%
	},

	socialRates: {
		basePercentage: 0.5, // 50%
		maxBase: AVG_SALARY_MONTHLY * 48, // 48-times average salary per year
		minBase: AVG_SALARY_MONTHLY * 0.25 * 12, // 25% of average salary per month
		rate: 0.292, // 29.2% = 28% (retirement) + 1.2% (unemployment)
	},
}

export function calcGrossIncome(monthlyIncome: number) {
	if (!monthlyIncome) {
		throw new Error('Monthly income is required')
	}

	// TODO: Actually, check minimum wage?
	if (monthlyIncome <= 0) {
		throw new Error('Monthly income must be greater than 0')
	}

	const yearlyIncome = monthlyIncome * 12

	const freelancer = calculateFreelancerGrossIncome(
		yearlyIncome,
		{ percentage: 0.6 },
		freelancerRates
	)

	const employee = calculateEmployeeGrossSalary(yearlyIncome, employeeRates)

	return {
		freelancer,
		employee,
	}
}
