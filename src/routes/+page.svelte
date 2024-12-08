<script lang="ts">
	import IncomeResults from './IncomeResults.svelte'
	import IncomeForm from './IncomeForm.svelte'
	import appStore from '$lib/store.svelte.js'
	import Intro from './Intro.svelte'
</script>

<Intro />
<IncomeForm />

{#if appStore.income.freelancer && appStore.income.employee}
		<IncomeResults {...appStore.income} />

	<div class="text-center m-4 mt-16 flex flex-col items-center">
		Detailní přehled příjmů, daní, odvodů a vzájemné porovnání OSVČ a zaměstnance najdete zde.
		<a href="/srovnani" class="btn btn-primary m-4">Detailní srovnání OSVČ a zaměstnance</a>
	</div>
{/if}
