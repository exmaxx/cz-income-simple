<script lang="ts">
	import { fetchNetIncome } from './actions.js'

	let incomeMonthly: number | null = $state(null)

	async function handleSubmit(event: Event) {
		event.preventDefault()

		if (incomeMonthly) {
			await fetchNetIncome(incomeMonthly)
		}
	}
</script>

<h1 class="text-center">Měsíční příjem</h1>

<h2 class="text-center">Čistý příjem</h2>

<form method="POST" onsubmit={handleSubmit} class="m-4 flex flex-col items-center">
	<label class="input input-bordered flex items-center gap-2">
		<input type="number" class="grow" placeholder="Jaký chci čistý příjem" bind:value={incomeMonthly} />
		Kč
	</label>

	<button type="submit" class="btn btn-primary mt-4" disabled={!incomeMonthly}> Spočítat </button>
</form>
