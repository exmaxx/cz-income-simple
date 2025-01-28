interface Store {
	form: {
		monthlyIncome: number | null
	}
}

const formStore: Store = $state({
	form: {
		monthlyIncome: null,
	},
})

export default formStore
