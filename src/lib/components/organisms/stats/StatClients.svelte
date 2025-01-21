<script lang="ts">
	import AmountStat from '$lib/components/molecules/AmountStat.svelte'

	// -- Props --
	interface Props {
		amount: number
	}

	const { amount }: Props = $props()

	// -- Derived --
	const clientCostFormatted = $derived(amount / 12)
</script>

<AmountStat
	title="Klient"
	amount={clientCostFormatted}
	explanation="měsíčně"
	color="secondary"
	hasOutlineOnly
/>
