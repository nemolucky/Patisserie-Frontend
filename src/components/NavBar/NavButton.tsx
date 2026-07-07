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

	if (location.pathname === path) {
		return (
			<div
				aria-label={`Current page: ${label}`}
				className='bg-[#F6C9D0] text-white h-14 w-14 flex items-center justify-center rounded-full shadow-md'
			>
				<Icon size={24} />
			</div>
		)
	}
	return (
		<Link
			to={path}
			aria-label={`Go to ${label}`}
			className='bg-white text-[#4b3b36] hover:bg-[#4b3b361a] h-14 w-14 flex items-center justify-center rounded-full transition-colors duration-300'
		>
			<Icon size={24} />
		</Link>
	)
}
