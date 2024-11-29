<script lang="ts">
	import IncomeResults from './IncomeResults.svelte'
	import IncomeForm from './IncomeForm.svelte'
	import { appState } from './store.svelte'
</script>

<IncomeForm />

{#if appState.income.freelancer && appState.income.employee}
	<IncomeResults {...appState.income} />
{/if}
