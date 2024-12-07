<script lang="ts">
	import { fetchIncomeOverview } from './actions.js'

	let monthlyNetIncome: number | null = $state(null)

	let incomeInput: HTMLInputElement

	async function handleSubmit(event: Event) {
		event.preventDefault()

		if (monthlyNetIncome) {
			await fetchIncomeOverview(monthlyNetIncome)
		}
	}

	async function handleError(event: Event) {
		event.preventDefault()

		incomeInput.focus()
	}
</script>

<h2 class="text-center">Čistý příjem</h2>

<form
	method="POST"
	onsubmit={monthlyNetIncome ? handleSubmit : handleError}
	class="m-4 flex flex-col items-center"
>
	<div>
		<div class="m-1 justify-self-start">Požadovaný čistý měsíční příjem:</div>
		<label class="input input-bordered flex min-w-60 items-center gap-2">
			<input
				type="number"
				name="incomeMonthly"
				class="grow"
				placeholder="Jaký chci čistý příjem"
				min="16442"
				bind:this={incomeInput}
				bind:value={monthlyNetIncome}
			/>
			Kč
		</label>
	</div>

	<button type="submit" class="btn btn-primary mt-4">Spočítat</button>
</form>
