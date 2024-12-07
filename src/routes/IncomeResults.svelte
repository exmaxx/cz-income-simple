<script lang="ts">
	import type { Result } from './types'
	import { fly } from 'svelte/transition'
	import IncomeResultsFreelancer from './IncomeResultsFreelancer.svelte'
	import IncomeResultsEmployee from './IncomeResultsEmployee.svelte'
	import IncomeResultsClient from './IncomeResultsClient.svelte'
	import IncomeResultsEmployer from './IncomeResultsEmployer.svelte'

	let { freelancer, employee }: Result = $props()
</script>

<div class="flex flex-col items-center" in:fly={{ y: -20 }}>
	<h2>Hrubý příjem</h2>

	<IncomeResultsFreelancer results={freelancer} />
	<IncomeResultsEmployee results={employee} />

	<h2>Klient(i) / zaměstnavatelé zaplatí</h2>

	<IncomeResultsClient results={freelancer} />
	<IncomeResultsEmployer results={employee} />
</div>
