<script lang="ts">
	import type { CalculationResultsEmployee } from '$lib/types'
	import { formatCurrency } from '$lib/formatters'

	let { results }: { results: CalculationResultsEmployee } = $props()

	const employeeGrossFormatted = $derived(formatCurrency(results.gross / 12))
</script>

<div class="stats mt-4 bg-accent text-accent-content shadow">
	<div class="stat">
		<div class="stat-title dark:text-neutral">Zaměstnanec</div>
		<div class="stat-value">{employeeGrossFormatted}</div>
		<div class="stat-desc dark:text-neutral">měsíčně</div>
	</div>
</div>
