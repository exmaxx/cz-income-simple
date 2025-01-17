<script lang="ts">
	import type { CalculationResultsEmployee } from '$lib/types'
	import { formatCurrency } from '$lib/formatters'

	const { results }: { results: CalculationResultsEmployee } = $props()

	const employerCost = $derived(
		results.gross + results.contributions.social.employer + results.contributions.health.employer
	)

	const employerCostFormatted = $derived(formatCurrency(employerCost / 12))
</script>

<div class="stats mt-4 border border-accent shadow">
	<div class="stat">
		<div class="stat-title">Zaměstnavatel</div>
		<div class="stat-value text-accent">{employerCostFormatted}</div>
		<div class="stat-desc">měsíčně</div>
	</div>
</div>
