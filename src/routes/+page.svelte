<script lang="ts">
	import Results from './Results.svelte'
	import type { Result } from './types'

	let incomeMonthly: number | null = $state(null)
	let result: Result | null = $state(null)

	async function fetchNetIncome() {
		const response: Response = await fetch('/api/gross', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ incomeMonthly }),
		})

		result = await response.json()
	}
</script>

<h1>Měsíční čistý příjem</h1>

<label>
	Zadejte:
	<input
		class="placeholder:italic placeholder:text-slate-400"
		type="number"
		bind:value={incomeMonthly}
	/> Kč
</label>

<button class="btn" onclick={fetchNetIncome} disabled={!incomeMonthly}>Spočítat</button>

{#if result}
	<Results {...result} />
{/if}
