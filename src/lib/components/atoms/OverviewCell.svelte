<script lang="ts">
	import { convertAmount, type PeriodKey, PeriodsTranslation } from './OverviewCell'
	import { formatCurrency } from '$lib/formatters'

	// -- Props --
	interface Props {
		amount: number | null
		period: PeriodKey
	}

	const { amount, period }: Props = $props()

	// -- Derived --
	const amountForPeriod = $derived(convertAmount(amount || 0, period))
	const formattedAmount = $derived(formatCurrency(amountForPeriod))
</script>

{#if amount}
	<td>
		{formattedAmount}

		<div class="text-xs text-neutral-content">
			{PeriodsTranslation[period]}
		</div>
	</td>
{:else}
	<td>-</td>
{/if}
