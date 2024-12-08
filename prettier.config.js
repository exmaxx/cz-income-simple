export default {
	useTabs: true,
	trailingComma: 'es5',
	semi: false,
	singleQuote: true,
	printWidth: 100,
	plugins: ['prettier-plugin-svelte', 'prettier-plugin-tailwindcss'],
	overrides: [
		{
			files: '*.html',
			options: {
				parser: 'html',
			},
		},
		{
			files: '*.svelte',
			options: {
				parser: 'svelte',
			},
		},
	],
	htmlWhitespaceSensitivity: 'ignore',
}
