<script lang="ts">
	import { type PeriodKey } from '$lib/components/atoms/OverviewCell'
	import OverviewCell from '$lib/components/atoms/OverviewCell.svelte'

	// -- Props --
	interface Props {
		heading?: string
		amounts: Array<number | null>
		period: PeriodKey
	}

	const { heading, amounts, period }: Props = $props()
</script>

<tr class="hover">
	<th>{heading}</th>

	{#each amounts as amount}
		<OverviewCell {amount} {period} />
	{/each}
</tr>
