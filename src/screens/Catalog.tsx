import { Filters } from '../components/Filters/Filters'
import { ProductList } from '../components/ProductList/ProductList'

export const Catalog = () => {
	return (
		<div className='w-9/12 mx-auto'>
			<div className='mt-10 flex gap-8'>
				<div className='flex-3'>
					<h2
						className='text-3xl text-[#4B3B36]'
						style={{ fontFamily: 'Fraunces' }}
					>
						Каталог
					</h2>
					<ProductList></ProductList>
				</div>
				<div className='flex-1'>
					<Filters></Filters>
				</div>
			</div>
		</div>
	)
}

export default Catalog
