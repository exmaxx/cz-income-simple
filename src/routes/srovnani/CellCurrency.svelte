<script lang="ts">
	import { formatCurrency } from '$lib/formatters'
	import { convertToDaily, convertToHourly, convertToMonthly } from '$lib/converters.svelte'

	let {
		yearlyAmount,
		period = 'year',
	}: { yearlyAmount: number; period?: 'year' | 'month' | 'day' | 'hour' } = $props()

	const amount = $derived.by(() => {
		switch (period) {
			case 'month':
				return convertToMonthly(yearlyAmount)

			case 'day':
				return convertToDaily(yearlyAmount)

			case 'hour':
				return convertToHourly(yearlyAmount)

			default:
				return yearlyAmount
		}
	})

	const periodTranslated = $derived.by(() => {
		switch (period) {
			case 'month':
				return 'měsíčně'

			case 'day':
				return 'denně'

			case 'hour':
				return 'hodinově'

			default:
				return 'ročně'
		}
	})
</script>

<td>
	{formatCurrency(amount)}
	<div class="text-xs text-neutral-content">
		{periodTranslated}
	</div>
</td>
