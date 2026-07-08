import { Filter } from 'lucide-react'

export const Filters = () => {
	return (
		<div className='mt-16 h-90 bg-white rounded-4xl shadow-lg p-6'>
			<div className='flex items-center gap-4'>
				<h3
					className='text-xl text-[#4B3B36]'
					style={{ fontFamily: 'Fraunces' }}
				>
					Быстрые фильтры
				</h3>
				<Filter size={20}></Filter>
			</div>
		</div>
	)
}
