<script lang="ts">
	import AmountStat from '$lib/components/molecules/AmountStat.svelte'

	// -- Props --
	interface Props {
		amount: number
	}

	const { amount }: Props = $props()

	// -- Derived --
	const monthlySalary = $derived(amount / 12)
</script>

<AmountStat
	title="Zaměstnanec"
	amount={monthlySalary}
	explanation="měsíčně"
	color="accent"
/>
