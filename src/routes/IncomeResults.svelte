<script lang="ts">
	import type { Result } from './types'

	let { freelancer, employee }: Result = $props()

	let freelancerFormatted = $derived(formatCurrency(Math.trunc(freelancer / 12)))
	let employeeFormatted = $derived(formatCurrency(Math.trunc(employee / 12)))

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
			<div class="stat-value">{freelancerFormatted}</div>
			<div class="stat-desc">měsíčně</div>
<!--			TODO: Add hourly rate. -->
<!--			<div class="stat-actions">-->
<!--				<span class="badge">{formatCurrency(21321)} / hodinu</span>-->
<!--			</div>-->
		</div>
	</div>

	<div class="stats bg-accent text-accent-content shadow mt-4">
		<div class="stat">
			<div class="stat-title">Zaměstnanec</div>
			<div class="stat-value">{employeeFormatted}</div>
			<div class="stat-desc">měsíčně</div>
		</div>
	</div>
</div>
