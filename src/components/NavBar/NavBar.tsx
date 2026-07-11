import { NavButton } from './NavButton'
import { NavigationButtonList } from './navigation'

export const NavBar = () => {
	return (
		<nav className='fixed max-h-100 bottom-12 left-1/2 -translate-x-1/2 xl:left-16 lg:left-14 md:left-12 md:top-1/2 md:-translate-y-1/2 lg:py-8 py-2 md:py-2 lg:w-18 px-4 md:px-0 md:w-16 flex md:flex-col items-center justify-evenly lg:space-y-8 space-x-4 md:space-x-0 sm:space-x-6 md:space-y-6 bg-white shadow-lg rounded-full'>
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
