<script lang="ts">
	import type { Snippet } from 'svelte'
	import { formatCurrency } from '$lib/formatters'
	import { getBgClass, getTextClass } from '$lib/components/molecules/AmountStat'
	import ToggleButton from '$lib/components/atoms/ToggleButton.svelte'
	import Collapsible from '$lib/components/atoms/Collapsible.svelte'

	// -- Props --
	interface Props {
		title: string
		amount: number
		explanation?: string
		color?: 'accent' | 'secondary'
		hasOutlineOnly?: boolean
		details?: Snippet
	}

	const {
		title,
		amount,
		explanation,
		color = 'accent',
		hasOutlineOnly,
		details,
	}: Props = $props()

	// -- Derived --
	const amountFormatted = $derived(formatCurrency(amount))
	const classBg = $derived(getBgClass(color, hasOutlineOnly))
	const classText = $derived(getTextClass(color, hasOutlineOnly))

	// NOTE: Keeping this out of HTML because prettier gets confused by template strings in Svelte template
	const classStats = $derived(`stats shadow w-min [&:not(:first-of-type)]:mt-4 ${classBg} ${classText}`)
	const classStatTitle = $derived(`stat-title ${classText}`)
	const classStatDesc = $derived(`stat-desc  ${classText}`)

	// -- State --
	let isCollapsed = $state(true)
</script>

<div class={classStats}>
	<div class="stat">
		<div class={classStatTitle}>{title}</div>

		<div class="stat-value">{amountFormatted}</div>

		{#if explanation || details}
			<div class={classStatDesc}>
				<div>{explanation}</div>

				{#if details}
					<Collapsible {isCollapsed}>
						{@render details?.()}
					</Collapsible>
				{/if}
			</div>
		{/if}

		{#if details}
			<div class="stat-actions justify-self-center">
				<ToggleButton
					label="↓ Více detailů"
					toggledLabel="↑ Méně detailů"
					classColor={classText}
					bind:isToggled={isCollapsed}
				/>
			</div>
		{/if}
	</div>
</div>
