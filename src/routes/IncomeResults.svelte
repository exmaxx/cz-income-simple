<script lang="ts">
	import type { Result } from './types'

	let { freelancer, employee }: Result = $props()

	let freelancerGrossFormatted = $derived(formatCurrency(Math.trunc(freelancer.gross / 12)))
	let employeeGrossFormatted = $derived(formatCurrency(Math.trunc(employee.gross / 12)))

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

<div class="flex flex-col items-center">
	<h2>Hrubý příjem</h2>

	<div class="stats bg-secondary text-secondary-content shadow">
		<div class="stat">
			<div class="stat-title">OSVČ</div>
			<div class="stat-value">{freelancerGrossFormatted}</div>
			<div class="stat-desc">měsíčně</div>
<!--			TODO: Add hourly rate. -->
<!--			<div class="stat-actions">-->
<!--				<span class="badge">{formatCurrency(21321)} / hodinu</span>-->
<!--			</div>-->
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
