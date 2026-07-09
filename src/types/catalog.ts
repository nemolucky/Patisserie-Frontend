export interface ICategory {
	id: number
	title: string
}

export interface INutritionFacts {
	calories: number
	protein: number
	fat: number
	carbohydrates: number
	weight: number
}

export interface IDessertImage {
	id: number
	url: string
	sortOrder: number
}

export interface IDessert {
	id: number
	title: string
	description: string
	price: number
	isActive: boolean
	facts: INutritionFacts
	images: IDessertImage[]
	categories: ICategory[]
}

export interface IDessertCatalog {
	id: number
	title: string
	price: number
	image: string
	categories: ICategory[]
}
