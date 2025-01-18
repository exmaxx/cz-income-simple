<script lang="ts">
	import type { CalculationResultsFreelancer } from '$lib/types'
	import { formatCurrency } from '$lib/formatters'
	import { BANK_HOLIDAYS, DAYS_PER_YEAR, HOURS_PER_DAY, VACATION_DAYS } from '$lib/constants'

	// -- Props --
	const { results }: { results: CalculationResultsFreelancer } = $props()

	// -- Locals --
	let isExpanded = $state(false)

	// -- Derived --
	const freelancerGrossFormatted = $derived(formatCurrency(results.gross / 12))

	const workingHoursPerYear = (DAYS_PER_YEAR - BANK_HOLIDAYS - VACATION_DAYS) * HOURS_PER_DAY

	const freelancerGrossHourlyFormatted = $derived(
		formatCurrency(results.gross / workingHoursPerYear)
	)

	// -- Events --
	function toggleDetails() {
		isExpanded = !isExpanded
	}
</script>

<div class="flex w-min flex-col items-center">
	<div class="stats bg-secondary text-secondary-content shadow">
		<div class="stat">
			<div class="stat-title dark:text-neutral">OSVČ</div>

			<div class="stat-value">{freelancerGrossFormatted}</div>

			<div
				class="stat-desc grid transition-[grid-template-rows] duration-100 ease-linear dark:text-neutral"
				class:grid-collapsed={!isExpanded}
				class:grid-expanded={isExpanded}
			>
				<div>měsíčně</div>

				<div
					class="overflow-hidden border-neutral border-opacity-30 transition-all duration-100"
					class:border-t={isExpanded}
					class:mt-4={isExpanded}
					class:pt-4={isExpanded}
				>
					<span class="badge">{freelancerGrossHourlyFormatted} / hodina *</span>

					<span class="mt-1 flex w-full text-wrap text-xs">
						<span class="mx-1">*</span>
						Hodinová sazba počítá s volnem během svátků ({BANK_HOLIDAYS} dnů) a s dovolenou ({VACATION_DAYS}
						dnů) ročně.
					</span>
				</div>
			</div>

			<div class="stat-actions justify-self-center">
				<button class="btn btn-link btn-xs mx-auto text-secondary-content" onclick={toggleDetails}>
					{#if isExpanded}
						↑ Méně
					{:else}
						↓ Více
					{/if}
					detailů
				</button>
			</div>
		</div>
	</div>
</div>

<style>
	.grid-collapsed {
		grid-template-rows: min-content 0fr;
	}

	.grid-expanded {
		grid-template-rows: min-content 1fr;
	}
</style>
