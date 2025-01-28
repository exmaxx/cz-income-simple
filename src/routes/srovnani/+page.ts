import type { PageLoad } from './$types'
import formStore from '$lib/stores/form.svelte'
import resultsStore from '$lib/stores/results.svelte'
import type { PeriodKey } from '$lib/components/atoms/OverviewCell'

interface OverviewLine {
	amounts: Array<number | null>
	heading?: string
	period: PeriodKey
}

export const ssr = false

export const load: PageLoad = () => {
	return {
		overviewLines: getOverviewLines(),
	}
}

function getOverviewLines() {
	const { monthlyIncome } = formStore.form

	const yearlyAmount = (monthlyIncome ?? 0) * 12

	const {
		income: { freelancer, employee },
	} = resultsStore

	const netIncomeLines: OverviewLine[] = [
		{
			heading: 'Čistý příjem',
			amounts: [yearlyAmount, yearlyAmount],
			period: 'HOUR',
		},
		{
			amounts: [yearlyAmount, yearlyAmount],
			period: 'DAY',
		},
		{
			amounts: [yearlyAmount, yearlyAmount],
			period: 'MONTH',
		},
		{
			amounts: [yearlyAmount, yearlyAmount],
			period: 'YEAR',
		},
	]

	const grossIncomeFreelancer = freelancer?.gross ?? 0
	const grossIncomeEmployee = employee?.gross ?? 0

	const grossIncomeLines: OverviewLine[] = [
		{
			heading: 'Hrubý příjem',
			amounts: [grossIncomeFreelancer, grossIncomeEmployee],
			period: 'HOUR',
		},
		{
			amounts: [grossIncomeFreelancer, grossIncomeEmployee],
			period: 'DAY',
		},
		{
			amounts: [grossIncomeFreelancer, grossIncomeEmployee],
			period: 'MONTH',
		},
		{
			amounts: [grossIncomeFreelancer, grossIncomeEmployee],
			period: 'YEAR',
		},
	]

	const incomeTaxFreelancer = freelancer?.contributions.incomeTax ?? 0
	const incomeTaxEmployee = employee?.contributions.incomeTax ?? 0

	const incomeTaxLines: OverviewLine[] = [
		{
			heading: 'Daň z příjmu',
			amounts: [incomeTaxFreelancer, incomeTaxEmployee],
			period: 'MONTH',
		},
	]

	const socialFreelancer = freelancer?.contributions.social ?? 0
	const socialEmployee = employee?.contributions.social.employee ?? 0
	const socialEmployer = employee?.contributions.social.employer ?? 0

	const socialLines: OverviewLine[] = [
		{
			heading: 'Já',
			amounts: [socialFreelancer, socialEmployee],
			period: 'MONTH',
		},
		{
			heading: 'Zaměstnavatel',
			amounts: [0, socialEmployer],
			period: 'MONTH',
		},
		{
			heading: 'Dohromady',
			amounts: [socialFreelancer, socialEmployee + socialEmployer],
			period: 'MONTH',
		},
	]

	const healthFreelancer = freelancer?.contributions.health ?? 0
	const healthEmployee = employee?.contributions.health.employee ?? 0
	const healthEmployer = employee?.contributions.health.employer ?? 0

	const healthLines: OverviewLine[] = [
		{
			heading: 'Já',
			amounts: [healthFreelancer, healthEmployee],
			period: 'MONTH',
		},
		{
			heading: 'Zaměstnavatel',
			amounts: [0, healthEmployer],
			period: 'MONTH',
		},
		{
			heading: 'Dohromady',
			amounts: [healthFreelancer, healthEmployee + healthEmployer],
			period: 'MONTH',
		},
	]

	const costLines: OverviewLine[] = [
		{
			heading: 'Náklady',
			amounts: [grossIncomeFreelancer, grossIncomeEmployee + socialEmployer + healthEmployer],
			period: 'MONTH',
		},
	]

	return {
		netIncomeLines,
		grossIncomeLines,
		socialLines,
		healthLines,
		incomeTaxLines,
		costLines,
	}
}
