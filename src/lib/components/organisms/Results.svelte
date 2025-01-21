<script lang="ts">
	import { tick } from 'svelte'
	import { fly } from 'svelte/transition'
	import StatFreelancer from './stats/StatFreelancer.svelte'
	import StatEmployee from './stats/StatEmployee.svelte'
	import StatClients from './stats/StatClients.svelte'
	import StatEmployer from './stats/StatEmployer.svelte'
	import type { Result } from '$lib/types'

	// -- Props --
	let { freelancer, employee }: Result = $props()

	// -- Refs --
	let elem: HTMLDivElement

	// -- Lifecycle --
	$effect.pre(() => {
		tick().then(() => {
			elem.scrollIntoView({ behavior: 'smooth' })
		})
	})
</script>

<div class="flex flex-col items-center" in:fly={{ y: -20 }} bind:this={elem}>
	<h2>Hrubý příjem</h2>

	<div class="flex flex-col items-center">
		<StatFreelancer amount={freelancer.gross} />
		<StatEmployee amount={employee.gross} />
	</div>

	<h2>Klient / zaměstnavatel zaplatí</h2>

	<div class="flex flex-col items-center">
		<StatClients amount={freelancer.gross} />

		<StatEmployer
			amount={employee.gross +
				employee.contributions.social.employer +
				employee.contributions.health.employer}
		/>
	</div>
</div>
