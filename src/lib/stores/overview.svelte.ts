import type { OverviewData } from '$lib/types'

interface Store {
	overview: OverviewData | null
}

const overviewStore: Store = $state({
	overview: null,
})

export default overviewStore
