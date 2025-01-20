<script lang="ts">
	// -- Props --
	interface Props {
		classColor: string
		label: string
		toggledLabel: string
		isToggled?: boolean
	}

	let { classColor, label, toggledLabel, isToggled = $bindable(false) }: Props = $props()

	// -- Events --
	const toggle = () => (isToggled = !isToggled)
</script>

<button class={`btn btn-link btn-xs mx-auto ${classColor}`} onclick={toggle}>
	{#if isToggled}
		{label}
	{:else}
		{toggledLabel}
	{/if}
</button>
