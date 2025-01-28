<script lang="ts">
	import resultsStore from '$lib/stores/results.svelte.js'
	import type { PageProps } from './$types'
	import OverviewLine from '$lib/components/organisms/OverviewLine.svelte'

	// -- Props --
	const { data }: PageProps = $props()

	// -- Derived --
	const {
		income: { freelancer, employee },
	} = resultsStore

	const {
		overviewLines: {
			grossIncomeLines,
			netIncomeLines,
			socialLines,
			healthLines,
			incomeTaxLines,
			costLines,
		},
	} = data
</script>

<button type="button" onclick={() => history.back()} class="btn btn-primary btn-sm m-4">
	&lt; Zpět
</button>

<h1>Srovnání</h1>

{#if freelancer && employee}
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
