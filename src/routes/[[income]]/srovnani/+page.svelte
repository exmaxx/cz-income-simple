<script lang="ts">
	import type { PageProps } from './$types'
	import OverviewLine from '$lib/components/organisms/OverviewLine.svelte'
	import { page } from '$app/state'

	// -- Props --
	const { data }: PageProps = $props()

	// -- Derived --
	const income = $derived(page.params.income)
	const overviewLines = $derived(data.overviewLines)
</script>

<a href={`/${income}`} class="btn btn-primary btn-sm m-4">← Zpět</a>

<h1>Srovnání</h1>

{#if overviewLines}
	{@const grossIncomeLines = overviewLines.grossIncomeLines}
	{@const netIncomeLines = overviewLines.netIncomeLines}
	{@const socialLines = overviewLines.socialLines}
	{@const healthLines = overviewLines.healthLines}
	{@const incomeTaxLines = overviewLines.incomeTaxLines}
	{@const costLines = overviewLines.costLines}

	<div class="overflow-x-auto">
		<table class="table">
			<thead>
				<tr>
					<th></th>
					<th>OSVČ</th>
					<th>Zaměstnanec</th>
				</tr>
			</thead>

			<tbody>
				{#each netIncomeLines as line}
					<OverviewLine heading={line.heading} amounts={line.amounts} period={line.period} />
				{/each}

				{#each grossIncomeLines as line}
					<OverviewLine heading={line.heading} amounts={line.amounts} period={line.period} />
				{/each}

				<tr>
					<th colspan="3" class="text-accent">Daně</th>
				</tr>

				{#each incomeTaxLines as line}
					<OverviewLine heading={line.heading} amounts={line.amounts} period={line.period} />
				{/each}

				<tr>
					<th colspan="3" class="text-accent">Sociální pojištění</th>
				</tr>

				{#each socialLines as line}
					<OverviewLine heading={line.heading} amounts={line.amounts} period={line.period} />
				{/each}

				<tr>
					<th colspan="3" class="text-accent">Zdravotní pojištění</th>
				</tr>

				{#each healthLines as line}
					<OverviewLine heading={line.heading} amounts={line.amounts} period={line.period} />
				{/each}

				<tr>
					<th colspan="3" class="text-accent">Celkové náklady pro klienta / zaměstnavatele</th>
				</tr>

				{#each costLines as line}
					<OverviewLine heading={line.heading} amounts={line.amounts} period={line.period} />
				{/each}
			</tbody>
		</table>
	</div>
{:else}
	<p>
		Žádná data. Prosím běžte na <a href="/" class="btn-link">hlavní stránku</a>.
	</p>
{/if}
