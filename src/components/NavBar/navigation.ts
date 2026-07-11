import {
	Dessert,
	Info,
	LucideShoppingCart,
	ShieldAlertIcon,
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
		icon: Info,
		label: 'О нас',
		path: '/about',
	},
	{
		icon: Dessert,
		label: 'Каталог',
		path: '/',
	},
	// {
	// 	icon: Heart,
	// 	label: 'Избранное',
	// 	path: '/favorites',
	// },
	{
		icon: LucideShoppingCart,
		label: 'Корзина',
		path: '/cart',
	},
	{
		icon: ShieldAlertIcon,
		label: 'Информация о гарантии',
		path: '/guarantee',
	},
]
