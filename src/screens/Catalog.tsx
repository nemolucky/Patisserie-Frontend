import { DessertList } from '../components/DessertList/DessertList'
import { Filters } from '../components/Filters/Filters'

export const Catalog = () => {
	return (
		<div className='w-11/12 sm:w-9/12 md:w-10/12 mx-auto'>
			<h2
				className='mt-10 text-2xl sm:text-3xl md:text-4xl text-[#4B3B36]'
				style={{ fontFamily: 'Fraunces' }}
			>
				Каталог
			</h2>
			<div className='mt-4 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 sm:gap-4 lg:gap-6'>
				<div className='order-2 sm:order-1 sm:col-span-2 md:col-span-3 lg:col-span-4'>
					<DessertList></DessertList>
				</div>
				<div className='order-1 sm:order-2'>
					<Filters></Filters>
				</div>
			</div>
		</div>
	)
}

export default Catalog
