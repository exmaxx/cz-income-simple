<script lang="ts">
	import AmountStat from '$lib/components/molecules/AmountStat.svelte'

	// -- Props --
	interface Props {
		amount: number
	}

	const { amount }: Props = $props()

	// -- Derived --
	const employerCostMonthly = $derived(amount / 12)
</script>

<AmountStat
	title="Zaměstnavatel"
	amount={employerCostMonthly}
	explanation="měsíčně"
	color="accent"
	hasOutlineOnly
/>
