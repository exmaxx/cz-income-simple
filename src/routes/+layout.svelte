<script lang="ts">
	import '../app.css'
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit'

	injectSpeedInsights()

	let { children } = $props()
</script>

<svelte:head>
	<title>Kalkulačka příjmu | Srovnání OSVČ a zaměstnance</title>
</svelte:head>

<div class="gradient">
	<div class="mx-auto min-h-screen md:max-w-2xl">
		{@render children()}
	</div>
</div>

<style>
	.gradient {
		--left: 0%;
		--top: 0%;
		background-image: radial-gradient(
			at var(--left) var(--top),
			oklch(var(--p) / 0.15) 0,
			transparent 70%
		);
		background-size: 80% 30rem;
		background-repeat: no-repeat;
	}

	@media (min-width: 768px) {
		.gradient {
			--left: 30%;
			--top: 20%;
		}
	}
</style>
