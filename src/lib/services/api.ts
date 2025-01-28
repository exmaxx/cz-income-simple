export class Api {
	constructor(
		private readonly apiURl: string,
		private readonly fetch: typeof globalThis.fetch
	) {}

	/**
	 * Sends a POST request to the API, returns the response.
	 *
	 * @param endpoint
	 * @param input
	 */
	async post(endpoint: string, input: Record<string, unknown>) {
		const headers = {
			'Content-Type': 'application/json',
		}

		const body = JSON.stringify(input)

		const response: Response = await this.fetch(`${this.apiURl}${endpoint}`, {
			method: 'POST',
			headers,
			body,
		})

		return response
	}
}
