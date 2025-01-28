<script lang="ts">
	import Results from '$lib/components/organisms/Results.svelte'
	import IncomeForm from '$lib/components/organisms/IncomeForm.svelte'
	import resultsStore from '$lib/stores/results.svelte.js'
</script>

<div class="flex flex-col items-center">
	<h1
		class="mx-2 my-1 bg-gradient-to-br from-accent via-secondary to-primary bg-clip-text text-center text-4xl font-semibold
		uppercase tracking-wide text-transparent md:text-5xl dark:bg-gradient-to-br"
	>
		Kalkulátor vašeho příjmu
	</h1>

	<h2 class="order-first mb-2 mt-10 text-base">Pro zaměstnance i OSVČ</h2>

	<p class="m-10 text-center">
		Zjistěte, jaký <strong class="font-black">hrubý příjem</strong>
		potřebujete, abyste si splnili své
		<strong>představy o čistém výdělku</strong>
		.
	</p>
</div>

<IncomeForm />

{#if resultsStore.income.freelancer && resultsStore.income.employee}
	<Results {...resultsStore.income} />

	<div class="m-4 mt-16 flex flex-col items-center text-center">
		Detailní přehled příjmů, daní, odvodů a vzájemné porovnání OSVČ a zaměstnance najdete zde.
		<a href="/srovnani" class="btn btn-primary m-4">Detailní srovnání OSVČ a zaměstnance</a>
	</div>
{/if}
