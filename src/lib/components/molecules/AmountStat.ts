export function getBgClass(color: string, hasOutlineOnly?: boolean) {
	switch (color) {
		case 'accent':
			return hasOutlineOnly ? 'border border-accent' : 'bg-accent' // keep full class names (for tailwind)

		case 'secondary':
			return hasOutlineOnly ? 'border border-secondary' : 'bg-secondary' // keep full class names (for tailwind)

		default:
			return ''
	}
}

export function getTextClass(color: string, hasOutlineOnly?: boolean) {
	switch (color) {
		case 'accent':
			return hasOutlineOnly ? 'text-accent' : 'text-accent-content dark:text-neutral' // keep full class names (for tailwind)

		case 'secondary':
			return hasOutlineOnly ? 'text-secondary' : 'text-secondary-content dark:text-neutral' // keep full class names (for tailwind)

		default:
			return ''
	}
}
