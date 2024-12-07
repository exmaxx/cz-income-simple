interface ContributionsBase {
	incomeTax: number
}

interface CalculationResultsBase {
	gross: number
	net: number
	reachedThresholds: string[]
}

interface ContributionsEmployee extends ContributionsBase {
	health: {
		employee: number
		employer: number
	}
	healthAssessmentBase: number
	incomeTaxBase: number
	incomeTaxWithHighRate: number
	incomeTaxWithLowRate: number
	incomeTaxNormalRate: number
	social: {
		employee: number
		employer: number
	}
	socialAssessmentBase: number
}

interface ContributionsFreelancer extends ContributionsBase {
	health: number
	healthAssessmentBase: number
	incomeTaxBase: number
	incomeTaxWithHighRate: number
	incomeTaxWithLowRate: number
	social: number
	socialAssessmentBase: number
}

export interface CalculationResultsEmployee extends CalculationResultsBase {
	contributions: ContributionsEmployee
}

export interface CalculationResultsFreelancer extends CalculationResultsBase {
	contributions: ContributionsFreelancer
}
