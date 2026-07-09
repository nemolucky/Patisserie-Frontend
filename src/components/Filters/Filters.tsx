import { Filter } from 'lucide-react'

export const Filters = () => {
	return (
		<div className='flex flex-col gap-4 bg-white rounded-3xl shadow-lg px-6 sm:px-4 py-4 sm:mt-4'>
			<div className='flex items-center gap-2'>
				<Filter size={20}></Filter>
				<h3 className='text-lg'>Фильтры</h3>
			</div>
			<div className='flex flex-wrap items-center justify-left gap-4'>
				<button className='px-3 py-1 bg-[#C8E6CB] text-sm lg:text-md text-black rounded-2xl'>
					Торты
				</button>
				<button className='px-3 py-1 bg-[#C8E6CB] text-sm lg:text-md text-black rounded-2xl'>
					Печенье
				</button>
				<button className='px-3 py-1 bg-[#C8E6CB] text-sm lg:text-md text-black rounded-2xl'>
					Десерты
				</button>
				<button className='px-3 py-1 bg-[#C8E6CB] text-sm lg:text-md text-black rounded-2xl'>
					Кофе
				</button>
				<button className='px-3 py-1 bg-[#C8E6CB] text-sm lg:text-md text-black rounded-2xl'>
					Выпечка
				</button>
			</div>
		</div>
	)
}
