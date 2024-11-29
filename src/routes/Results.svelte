<script lang="ts">
	import type { Result } from './types'

	let { freelancer, employee }: Result = $props()
</script>

<h2>Řekněte si o:</h2>

<p>OSVČ: {Math.trunc(freelancer)}</p>
<p>Zaměstnanec: {Math.trunc(employee)}</p>
