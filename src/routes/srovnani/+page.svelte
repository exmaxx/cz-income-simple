<script lang="ts">
	import appStore from '$lib/store.svelte'
	import CellCurrency from './CellCurrency.svelte'

	const {
		income: { freelancer, employee },
	} = appStore
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
				<tr>
					<th>Čistý příjem</th>
					<CellCurrency yearlyAmount={freelancer.net} period="hour" />
					<CellCurrency yearlyAmount={employee.net} period="hour" />
				</tr>

				<tr>
					<th></th>
					<CellCurrency yearlyAmount={freelancer.net} period="day" />
					<CellCurrency yearlyAmount={employee.net} period="day" />
				</tr>

				<tr>
					<th></th>
					<CellCurrency yearlyAmount={freelancer.net} period="month" />
					<CellCurrency yearlyAmount={employee.net} period="month" />
				</tr>

				<tr>
					<th></th>
					<CellCurrency yearlyAmount={freelancer.net} period="year" />
					<CellCurrency yearlyAmount={employee.net} period="year" />
				</tr>

				<tr>
					<th>Hrubý příjem</th>
					<CellCurrency yearlyAmount={freelancer.gross} period="hour" />
					<CellCurrency yearlyAmount={employee.gross} period="hour" />
				</tr>

				<tr>
					<th></th>
					<CellCurrency yearlyAmount={freelancer.gross} period="day" />
					<CellCurrency yearlyAmount={employee.gross} period="day" />
				</tr>

				<tr>
					<th></th>
					<CellCurrency yearlyAmount={freelancer.gross} period="month" />
					<CellCurrency yearlyAmount={employee.gross} period="month" />
				</tr>

				<tr>
					<th></th>
					<CellCurrency yearlyAmount={freelancer.gross} period="year" />
					<CellCurrency yearlyAmount={employee.gross} period="year" />
				</tr>

				<tr>
					<th colspan="3" class="text-accent">Daně</th>
				</tr>

				<tr>
					<th>Daň z příjmu</th>
					<CellCurrency yearlyAmount={freelancer.contributions.incomeTax} period="month" />
					<CellCurrency yearlyAmount={employee.contributions.incomeTax} period="month" />
				</tr>

				<tr>
					<th colspan="3" class="text-accent">Socialní pojištění</th>
				</tr>

				<tr>
					<th>Já</th>
					<CellCurrency yearlyAmount={freelancer.contributions.social} period="month" />
					<CellCurrency yearlyAmount={employee.contributions.social.employee} period="month" />
				</tr>

				<tr>
					<th>Zaměstnavatel</th>
					<td>-</td>
					<CellCurrency yearlyAmount={employee.contributions.social.employer} period="month" />
				</tr>

				<tr>
					<th>Dohromady</th>
					<CellCurrency yearlyAmount={freelancer.contributions.social} period="month" />
					<CellCurrency
						yearlyAmount={employee.contributions.social.employee +
							employee.contributions.social.employer}
						period="month"
					/>
				</tr>

				<tr>
					<th colspan="3" class="text-accent">Zdravotní pojištění</th>
				</tr>

				<tr>
					<th>Já</th>
					<CellCurrency yearlyAmount={freelancer.contributions.health} period="month" />
					<CellCurrency yearlyAmount={employee.contributions.health.employee} period="month" />
				</tr>

				<tr>
					<th>Zaměstnavatel</th>
					<td>-</td>
					<CellCurrency yearlyAmount={employee.contributions.health.employer} period="month" />
				</tr>

				<tr>
					<th>Dohromady</th>
					<CellCurrency yearlyAmount={freelancer.contributions.health} period="month" />
					<CellCurrency
						yearlyAmount={employee.contributions.health.employee +
							employee.contributions.health.employer}
						period="month"
					/>
				</tr>

				<tr>
					<th colspan="3" class="text-accent">Celkové náklady pro klienta / zaměstnavatele</th>
				</tr>

				<tr>
					<th>Náklady</th>
					<CellCurrency yearlyAmount={freelancer.gross} period="month" />
					<CellCurrency
						yearlyAmount={employee.gross +
							employee.contributions.social.employer +
							employee.contributions.health.employer}
						period="month"
					/>
				</tr>
			</tbody>
		</table>
	</div>
{:else}
	<p>
		Žádná data. Prosím běžte na <a href="/" class="btn-link">hlavní stránku</a>
		.
	</p>
{/if}
