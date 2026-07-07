import { NavButton } from './NavButton'
import { NavigationButtonList } from './navigation'

export const NavBar = () => {
	return (
		<nav className='fixed left-7 top-1/2 -translate-y-1/2 py-8 w-20 flex flex-col items-center justify-evenly space-y-8 bg-white shadow-lg rounded-full'>
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
