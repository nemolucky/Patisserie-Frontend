import { ImagePicker } from '../components/ImagePicker/ImagePicker'
import { ProductInfo } from '../components/ProductInfo/ProductInfo'

export const Product = () => {
	return (
		<div className='w-9/12 mx-auto'>
			<div className='mt-10 flex gap-10'>
				<ImagePicker />
				<ProductInfo />
			</div>
		</div>
	)
}

export default Product
