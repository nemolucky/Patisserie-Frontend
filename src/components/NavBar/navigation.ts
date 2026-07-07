import {
	Heart,
	Home,
	Info,
	ShoppingBasket,
	type LucideProps,
} from 'lucide-react'

export interface INavigationButton {
	icon: React.ForwardRefExoticComponent<
		Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
	>
	label: string
	path: string
}

export const NavigationButtonList: INavigationButton[] = [
	{
		icon: Home,
		label: 'Главная',
		path: '/',
	},
	{
		icon: Heart,
		label: 'Избранное',
		path: '/favorites',
	},
	{
		icon: ShoppingBasket,
		label: 'Корзина',
		path: '/cart',
	},
	{
		icon: Info,
		label: 'Информация',
		path: '/info',
	},
]
