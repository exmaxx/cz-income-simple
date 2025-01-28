<script lang="ts">
	import { enhance } from '$app/forms'
	import { goto } from '$app/navigation'
	import type { SubmitFunction } from '@sveltejs/kit'

	// -- Props --
	interface Props {
		initial?: number
	}

	const { initial }: Props = $props()

	// -- State --
	let incomeMonthly: number | undefined = $state(initial)

	// -- Methods --
	/**
	 * When JS disabled:
	 * This handler is not used. Redirection happens on server, using `default` action.
	 *
	 * When JS is enabled:
	 * Cancel the default action (i.e. do not post the form, prevent unnecessary request call)
	 * redirect in the client instead.
	 * @param cancel
	 * @param formData
	 */
	const handleSubmitOnClient: SubmitFunction = ({ cancel, formData }) => {
		cancel()

		const incomeMonthly = formData.get('incomeMonthlyValue')

		goto(`/${incomeMonthly}`, { noScroll: true, keepFocus: true })
	}
</script>

<h2 class="text-center">Čistý příjem</h2>

<form method="POST" use:enhance={handleSubmitOnClient} class="mx-4 flex flex-col items-center">
	<div>
		<div class="m-1 justify-self-start">Požadovaný čistý měsíční příjem:</div>
		<label class="input input-bordered flex min-w-60 items-center gap-2">
			<input
				type="number"
				name="incomeMonthlyValue"
				class="grow"
				placeholder="Jaký chci čistý příjem"
				required
				bind:value={incomeMonthly}
			/>
			Kč
		</label>
	</div>

	<button class="btn btn-primary mt-4">Spočítat</button>
</form>
