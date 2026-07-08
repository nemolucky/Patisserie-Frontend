import { NavButton } from './NavButton'
import { NavigationButtonList } from './navigation'

export const NavBar = () => {
	return (
		<nav className='fixed left-2 lg:left-8 md:left-4 top-1/2 -translate-y-1/2 lg:py-8 md:py-6 py-4 lg:w-20 md:w-18 w-16 flex flex-col items-center justify-evenly lg:space-y-8 space-y-4 md:space-y-6 bg-white shadow-lg rounded-full'>
			{NavigationButtonList.map(button => (
				<NavButton
					key={button.path}
					icon={button.icon}
					label={button.label}
					path={button.path}
				/>
			))}
		</nav>
	)
}
