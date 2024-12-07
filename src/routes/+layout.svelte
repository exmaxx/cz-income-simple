<script lang="ts">
	import '../app.css'
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit'

	injectSpeedInsights()

	let { children } = $props()
</script>

<div class="gradient min-h-screen">
	{@render children()}
</div>

<style>
	.gradient {
		background-image: radial-gradient(at left top, oklch(var(--p) / 0.15) 0, transparent 70%);
		background-size: 100% 30rem;
		background-repeat: no-repeat;
	}
</style>
