import { ShoppingBasket } from 'lucide-react'
import { Link } from 'react-router-dom'

export const DessertCard = () => {
	const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		e.stopPropagation()
		console.log('+1')
	}

	return (
		<Link
			to={'/dessert'}
			className='bg-white rounded-s-3xl rounded-ee-3xl shadow-lg  flex flex-col items-center'
		>
			<img
				src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnv1qVhSgeoLVTDYaCejI6wcenJ6TMagiu1_KRCeI2cS5cGkqr_Fd6-Zs&s=10'
				alt='Product'
				className='w-full h-65 object-cover rounded-s-2xl rounded-ee-2xl mb-4 border-b-4 border-[#F6C9D0]'
			/>
			<div className='w-full px-6'>
				<h3 className='left-6 text-sm text-[#4b3b36bd] uppercase'>торты</h3>
			</div>
			<div className='px-6 mt-2 flex items-center justify-between w-full mb-4'>
				<div className='flex flex-col gap-2'>
					<h3 className='text-lg font-semibold'>Молочная девочка</h3>
					<span className='text-xl font-bold'>1990 ₽</span>
				</div>
				<button
					className='bg-[#B98CAE] text-white px-3 py-3 rounded-full hover:bg-[#b98caec8] transition-colors duration-300 shadow-md'
					onClick={handleAddToCart}
				>
					<ShoppingBasket size={26} />
				</button>
			</div>
		</Link>
	)
}
