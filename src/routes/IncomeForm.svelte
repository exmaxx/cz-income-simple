<script lang="ts">
	import { fetchIncomeOverview } from './actions.js'

	let monthlyNetIncome: number | null = $state(null)

	async function handleSubmit(event: Event) {
		event.preventDefault()

		if (monthlyNetIncome) {
			await fetchIncomeOverview(monthlyNetIncome)
		}
	}
</script>

<h1 class="text-center">Měsíční příjem</h1>

<h2 class="text-center">Čistý příjem</h2>

<form method="POST" onsubmit={handleSubmit} class="m-4 flex flex-col items-center">
	<label class="input input-bordered flex items-center gap-2 min-w-60">
		<input
			type="number"
			name="incomeMonthly"
			class="grow"
			placeholder="Jaký chci čistý příjem"
			min="16442"
			bind:value={monthlyNetIncome}
		/>
		Kč
	</label>

	<button type="submit" class="btn btn-primary mt-4" disabled={!monthlyNetIncome}> Spočítat </button>
</form>
