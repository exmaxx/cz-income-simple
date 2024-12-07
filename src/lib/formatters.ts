/**
 * Format a number as a CZK currency. E.g. `12345` -> `12 345 Kč`.
 * @param amount
 */
export function formatCurrency(amount: number): string {
	return amount.toLocaleString('cs-CZ', {
		style: 'currency',
		currency: 'CZK',
		maximumFractionDigits: 0,
	})
}
