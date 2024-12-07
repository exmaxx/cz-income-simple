<script lang="ts">
	import type { CalculationResultsFreelancer } from '$lib/types'
	import { formatCurrency } from '$lib/formatters'
	import { BANK_HOLIDAYS, DAYS_PER_YEAR, HOURS_PER_DAY, VACATION_DAYS } from '$lib/constants'

	let { results }: { results: CalculationResultsFreelancer } = $props()

	const freelancerGrossFormatted = $derived(formatCurrency(results.gross / 12))

	const workingHoursPerYear = (DAYS_PER_YEAR - BANK_HOLIDAYS - VACATION_DAYS) * HOURS_PER_DAY

	let freelancerGrossHourlyFormatted = $derived(formatCurrency(results.gross / workingHoursPerYear))
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
		<span class="mx-1">*</span>
		Hodinová sazba počítá s volnem během svátků ({BANK_HOLIDAYS} dnů) a s dovolenou ({VACATION_DAYS}
		dnů).
	</p>
</div>
