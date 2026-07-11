import { type LucideProps } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

interface Props {
	icon: React.ForwardRefExoticComponent<
		Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
	>
	label: string
	path: string
}

export const NavButton = ({ icon: Icon, label, path }: Props) => {
	const location = useLocation()

	const isActive =
		location.pathname === path ||
		(location.pathname.includes('/dessert') && path === '/')

	return (
		<Link
			to={path}
			aria-current={isActive ? 'page' : undefined}
			aria-label={isActive ? `Current page: ${label}` : `Go to ${label}`}
			className={`lg:h-14 h-12 lg:w-14 w-12 flex items-center justify-center rounded-full transition-all duration-300 ${
				isActive
					? 'bg-[#F6C9D0] text-white shadow-md'
					: 'bg-white text-[#4b3b36] hover:bg-[#4b3b361a]'
			}`}
		>
			<Icon size={24} />
		</Link>
	)
}
