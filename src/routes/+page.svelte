<script lang="ts">
	import IncomeResults from './IncomeResults.svelte'
	import IncomeForm from './IncomeForm.svelte'
	import { appState } from './store.svelte'
	import Intro from './Intro.svelte'
</script>

<Intro />
<IncomeForm />

{#if appState.income.freelancer && appState.income.employee}
	<IncomeResults {...appState.income} />
{/if}
