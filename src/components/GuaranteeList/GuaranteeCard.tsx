import { ChevronDown, Dot } from 'lucide-react'
import type { IGuarantee } from './guarantees'
import { useState } from 'react'

interface Props {
	guarantee: IGuarantee
}

export const GuaranteeCard = ({ guarantee }: Props) => {
	const [isExpanded, setIsExpanded] = useState(false)

	const handleToggleExpanderClick = () => {
		setIsExpanded(!isExpanded)
	}

	return (
		<button
			className={`flex flex-col items-start gap-4 px-4 sm:px-6 md:px-8 xl:px-12 pt-3 sm:pt-4 xl:pt-5 xl:pb-2 w-full bg-white rounded-2xl shadow-md ${
				isExpanded && 'pb-3 sm:pb-4 md:pb-6 xl:pb-6'
			}`}
			onClick={handleToggleExpanderClick}
			aria-expanded={isExpanded}
		>
			<div className='w-full flex justify-between items-center'>
				<div className='flex justify-start w-full items-center gap-4'>
					<span className='p-2 md:p-3 bg-[#C8E6CB] rounded-full'>
						<guarantee.icon />
					</span>
					<h3 className='text-md md:text-lg'>{guarantee.label}</h3>
				</div>
				<ChevronDown
					className={`transition-transform duration-300 ${
						isExpanded ? 'rotate-180' : 'rotate-0'
					}`}
				/>
			</div>

			<div
				className={`grid w-full transition-all duration-300 ease-in-out ${
					isExpanded
						? 'grid-rows-[1fr] opacity-100'
						: 'grid-rows-[0fr] opacity-0'
				}`}
			>
				<div className='overflow-hidden flex flex-col gap-2'>
					{guarantee.descriptions.map((description, index) => (
						<div key={index} className='flex items-center gap-2'>
							<Dot size={28} />
							<span className='text-md md:text-lg text-left'>
								{description}
							</span>
						</div>
					))}
				</div>
			</div>
		</button>
	)
}
