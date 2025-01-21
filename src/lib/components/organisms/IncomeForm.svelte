<script lang="ts">
	import { fetchIncomeOverview } from '../../../routes/actions.js'

	// -- State --
	let monthlyNetIncome: number | null = $state(null)

	// -- Refs --
	let incomeInput: HTMLInputElement

	// -- Events --
	async function fetchIncomeData(event: Event) {
		event.preventDefault()

		if (monthlyNetIncome) {
			await fetchIncomeOverview(monthlyNetIncome)
		}
	}

	async function focusInput(event: Event) {
		event.preventDefault()

		incomeInput.focus()
	}
</script>

<h2 class="text-center">Čistý příjem</h2>

<form
	method="POST"
	onsubmit={monthlyNetIncome ? fetchIncomeData : focusInput}
	class="mx-4 flex flex-col items-center"
>
	<div>
		<div class="m-1 justify-self-start">Požadovaný čistý měsíční příjem:</div>
		<label class="input input-bordered flex min-w-60 items-center gap-2">
			<input
				type="number"
				name="incomeMonthly"
				class="grow"
				placeholder="Jaký chci čistý příjem"
				bind:this={incomeInput}
				bind:value={monthlyNetIncome}
			/>
			Kč
		</label>
	</div>

	<button type="submit" class="btn btn-primary mt-4">Spočítat</button>
</form>
