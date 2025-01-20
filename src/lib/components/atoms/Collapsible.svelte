<script lang="ts">
	import type { Snippet } from 'svelte'

	// -- Props --
	interface Props {
		isCollapsed: boolean
		children?: Snippet
	}

	let { isCollapsed, children }: Props = $props()
</script>

<div
	class="grid transition-[grid-template-rows] duration-100 ease-linear"
	class:grid-rows-[0fr]={isCollapsed}
	class:grid-rows-[1fr]={!isCollapsed}
>
	<div class="overflow-hidden">
		{@render children?.()}
	</div>
</div>
