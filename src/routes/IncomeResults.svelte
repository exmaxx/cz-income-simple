<script lang="ts">
	import type { Result } from './types'
	import { fly } from 'svelte/transition'
	import IncomeResultsFreelancer from './IncomeResultsFreelancer.svelte'
	import IncomeResultsEmployee from './IncomeResultsEmployee.svelte'

	let { freelancer, employee }: Result = $props()
</script>

<div class="flex flex-col items-center" in:fly={{ y: -20 }}>
	<h2>Hrubý příjem</h2>

	<IncomeResultsFreelancer results={freelancer} />
	<IncomeResultsEmployee results={employee} />
</div>
