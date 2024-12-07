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

	<div class="w-full text-center">
		<a href="/srovnani" class="btn btn-primary mt-4">Detailní srovnání OSVČ a zaměstnance</a>
	</div>
{/if}
