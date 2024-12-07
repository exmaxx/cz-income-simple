<script lang="ts">
	import type { CalculationResultsFreelancer } from '$lib/types'
	import { formatCurrency } from '$lib/formatters'

	const { results }: { results: CalculationResultsFreelancer } = $props()

	const clientCostFormatted = $derived(formatCurrency(results.gross / 12))

</script>

<div class="stats mt-4 border border-secondary shadow">
	<div class="stat">
		<div class="stat-title">Klient(i)</div>
		<div class="stat-value text-secondary">{clientCostFormatted}</div>
		<div class="stat-desc">měsíčně</div>
	</div>
</div>
