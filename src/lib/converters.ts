import { BANK_HOLIDAYS, DAYS_PER_YEAR, HOURS_PER_DAY, VACATION_DAYS } from '$lib/constants'

export function convertToMonthly(yearlyAmount: number): number {
	return yearlyAmount / 12
}

export function convertToDaily(yearlyAmount: number): number {
	const workingHoursPerYear = DAYS_PER_YEAR - BANK_HOLIDAYS - VACATION_DAYS

	return yearlyAmount / workingHoursPerYear
}

export function convertToHourly(yearlyAmount: number): number {
	return convertToDaily(yearlyAmount) / HOURS_PER_DAY
}
