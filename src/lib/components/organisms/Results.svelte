<script lang="ts">
	import { fly } from 'svelte/transition'
	import StatFreelancer from './stats/StatFreelancer.svelte'
	import StatEmployee from './stats/StatEmployee.svelte'
	import StatClients from './stats/StatClients.svelte'
	import StatEmployer from './stats/StatEmployer.svelte'
	import type { OverviewData } from '$lib/types'

	// -- Props --
	let { freelancer, employee }: OverviewData = $props()
</script>

<div class="flex flex-col items-center" in:fly={{ y: -20 }}>
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
