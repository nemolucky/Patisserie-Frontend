import { CategoryList } from './CategoryList'
import { ProductDescription } from './ProductDescription'

export const ProductInfo = () => {
	return (
		<div className='flex-1 flex flex-col gap-4'>
			<CategoryList />
			<ProductDescription />
		</div>
	)
}
