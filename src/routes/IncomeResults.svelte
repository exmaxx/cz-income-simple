<script lang="ts">
	import { tick } from 'svelte'
	import { fly } from 'svelte/transition'
	import type { Result } from './types'
	import IncomeResultsFreelancer from './IncomeResultsFreelancer.svelte'
	import IncomeResultsEmployee from './IncomeResultsEmployee.svelte'
	import IncomeResultsClient from './IncomeResultsClient.svelte'
	import IncomeResultsEmployer from './IncomeResultsEmployer.svelte'

	let { freelancer, employee }: Result = $props()
	let elem: HTMLDivElement

	$effect.pre(() => {
		tick().then(() => {
			elem.scrollIntoView({ behavior: 'smooth' })
		})
	})
</script>

<div class="flex flex-col items-center" in:fly={{ y: -20 }} bind:this={elem}>
	<h2>Hrubý příjem</h2>

	<IncomeResultsFreelancer results={freelancer} />
	<IncomeResultsEmployee results={employee} />

	<h2>Klient / zaměstnavatel zaplatí</h2>

	<IncomeResultsClient results={freelancer} />
	<IncomeResultsEmployer results={employee} />
</div>
