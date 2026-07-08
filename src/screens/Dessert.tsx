import { ImagePicker } from '../components/ImagePicker/ImagePicker'
import { DessertInfo } from '../components/DessertInfo/DessertInfo'

export const Dessert = () => {
	return (
		<div className='w-9/12 mx-auto'>
			<div className='mt-10 flex gap-10'>
				<ImagePicker />
				<DessertInfo />
			</div>
		</div>
	)
}

export default Dessert
