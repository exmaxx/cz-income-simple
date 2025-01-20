<script lang="ts">
	import { formatCurrency } from '$lib/formatters'
	import { BANK_HOLIDAYS, DAYS_PER_YEAR, HOURS_PER_DAY, VACATION_DAYS } from '$lib/constants'
	import AmountStat from '$lib/components/molecules/AmountStat.svelte'

	// -- Props --
	interface Props {
		amount: number
	}

	const { amount }: Props = $props()

	// -- Derived --
	const monthlyIncome = $derived(amount / 12)

	const workingHoursPerYear = (DAYS_PER_YEAR - BANK_HOLIDAYS - VACATION_DAYS) * HOURS_PER_DAY

	const hourlyIncomeFormatted = $derived(formatCurrency(amount / workingHoursPerYear))
</script>

<AmountStat title="OSVČ" amount={monthlyIncome} explanation="měsíčně" color="secondary">
	{#snippet details()}
		<div class="mt-4 border-t border-neutral border-opacity-30 pt-4">
			<span class="badge">{hourlyIncomeFormatted} / hodina *</span>

			<span class="mt-1 flex text-wrap text-xs">
				<span class="mx-1">*</span>
				Hodinová sazba počítá s volnem během svátků ({BANK_HOLIDAYS} dnů) a s dovolenou ({VACATION_DAYS}
				dnů) ročně.
			</span>
		</div>
	{/snippet}
</AmountStat>
