import { convertToDaily, convertToHourly, convertToMonthly } from '$lib/converters'

export function convertAmount(yearlyAmount: number, period: PeriodKey) {
	switch (period) {
		case 'MONTH':
			return convertToMonthly(yearlyAmount)

		case 'DAY':
			return convertToDaily(yearlyAmount)

		case 'HOUR':
			return convertToHourly(yearlyAmount)

		default:
			return yearlyAmount
	}
}

export const PeriodsTranslation = {
	MONTH: 'měsíčně',
	DAY: 'denně',
	HOUR: 'hodinově',
	YEAR: 'ročně',
} as const

export type PeriodKey = keyof typeof PeriodsTranslation
