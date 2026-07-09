import { ShoppingBasket } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { IDessertCatalog } from '../../types/catalog'

interface Props {
	dessert: IDessertCatalog
}

export const DessertCard = ({ dessert }: Props) => {
	const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		e.stopPropagation()
		console.log('+1')
	}

	return (
		<Link
			to={`/dessert/${dessert.id}`}
			className='bg-white rounded-s-3xl rounded-ee-3xl shadow-lg  flex flex-col items-center'
		>
			<img
				src={dessert.image}
				alt={`${dessert.title} image`}
				className='w-full h-65 object-cover rounded-s-2xl rounded-ee-2xl mb-4 border-b-4 border-[#F6C9D0]'
			/>
			<ul className='w-full px-6 flex flex-wrap gap-2 '>
				{dessert.categories.map((category, index) => (
					<span
						key={index}
						className='left-6 text-sm text-[#4b3b36bd] uppercase'
					>
						{category.title}
					</span>
				))}
			</ul>
			<div className='px-6 mt-2 flex items-center justify-between w-full mb-4'>
				<div className='flex flex-col gap-2'>
					<h3 className='text-lg font-semibold'>{dessert.title}</h3>
					<span className='text-xl font-bold'>{dessert.price} ₽</span>
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
