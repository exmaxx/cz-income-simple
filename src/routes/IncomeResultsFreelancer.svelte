<script lang="ts">
	import type { CalculationResultsFreelancer } from '$lib/types'
	import { formatCurrency } from '$lib/formatters'

	let { results }: { results: CalculationResultsFreelancer } = $props()

	const freelancerGrossFormatted = $derived(formatCurrency(results.gross / 12))

	const bankHolidays = 10
	const vacationDays = 25
	const daysPerYear = 52 * 5
	const hoursPerYear = (daysPerYear - bankHolidays - vacationDays) * 8

	let freelancerGrossHourlyFormatted = $derived(formatCurrency(results.gross / hoursPerYear))
</script>

<div class="flex w-min flex-col items-center">
	<div class="stats bg-secondary text-secondary-content shadow">
		<div class="stat">
			<div class="stat-title dark:text-neutral">OSVČ</div>
			<div class="stat-value">{freelancerGrossFormatted}</div>
			<div class="stat-desc dark:text-neutral">měsíčně</div>
			<div class="stat-actions">
				<span class="badge">{freelancerGrossHourlyFormatted} / hodina *</span>
			</div>
		</div>
	</div>

	<p class="mt-1 flex w-full text-wrap text-xs">
		<span class="mx-1">*</span> Hodinová sazba počítá s volnem během svátků ({bankHolidays} dnů) a s
		dovolenou ({vacationDays} dnů).
	</p>
</div>
