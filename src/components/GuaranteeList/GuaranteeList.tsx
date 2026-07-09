import { GuaranteeCard } from './GuaranteeCard'
import { guarantees } from './guarantees'

export const GuaranteeList = () => {
	return (
		<div className='flex flex-col gap-4 xl:gap-5'>
			{guarantees.map((guarantee, index) => {
				return <GuaranteeCard key={index} guarantee={guarantee} />
			})}
		</div>
	)
}
