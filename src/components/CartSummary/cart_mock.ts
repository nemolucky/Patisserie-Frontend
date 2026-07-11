export interface CartItem {
	id: number
	title: string
	quantity: number
	price: number
}

export const CART_MOCK: CartItem[] = [
	{
		id: 1,
		title: 'Клубничная Панна-Котта',
		quantity: 3,
		price: 2300,
	},
	{
		id: 2,
		title: 'Тирамису',
		quantity: 4,
		price: 5678,
	},
]
