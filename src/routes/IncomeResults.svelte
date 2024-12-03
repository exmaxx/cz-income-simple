<script lang="ts">
	import type { Result } from './types'
	import { fly } from 'svelte/transition'

	let { freelancer, employee }: Result = $props()

	let freelancerGrossFormatted = $derived(formatCurrency(Math.trunc(freelancer.gross / 12)))
	let employeeGrossFormatted = $derived(formatCurrency(Math.trunc(employee.gross / 12)))

	const hoursPerYear = 52 * 40

	let freelancerGrossHourlyFormatted = $derived(
		formatCurrency(Math.trunc(freelancer.gross / hoursPerYear))
	)

	/**
	 * Format a number as a CZK currency. E.g. `12345` -> `12 345 Kč`.
	 * @param amount
	 */
	function formatCurrency(amount: number): string {
		return amount.toLocaleString('cs-CZ', {
			style: 'currency',
			currency: 'CZK',
			maximumFractionDigits: 0,
		})
	}
</script>

<div class="flex flex-col items-center" in:fly={{ y: -20 }}>
	<h2>Hrubý příjem</h2>

	<div class="stats bg-secondary text-secondary-content shadow">
		<div class="stat">
			<div class="stat-title">OSVČ</div>
			<div class="stat-value">{freelancerGrossFormatted}</div>
			<div class="stat-desc">měsíčně</div>
			<div class="stat-actions">
				<span class="badge">{freelancerGrossHourlyFormatted} / hodina</span>
			</div>
		</div>
	</div>

	<div class="stats mt-4 bg-accent text-accent-content shadow">
		<div class="stat">
			<div class="stat-title">Zaměstnanec</div>
			<div class="stat-value">{employeeGrossFormatted}</div>
			<div class="stat-desc">měsíčně</div>
		</div>
	</div>
</div>
