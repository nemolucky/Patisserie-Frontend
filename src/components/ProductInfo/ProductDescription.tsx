import { Dot, ShoppingBasket } from 'lucide-react'
import { useState } from 'react'
import { NutritionFacts } from './NutritionFacts'

export const ProductDescription = () => {
	const [quantity, setQuantity] = useState(1)

	const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		e.stopPropagation()
		console.log('+1')
	}

	const isActive = true ? (
		<div className='flex items-center justify-start gap-1'>
			<Dot size={40} className='text-[#a8c3ab] m-0 p-0' />
			<span className='mr-10 text-md font-semibold text-[#a8c3ab]'>
				Есть в наличии
			</span>
		</div>
	) : (
		<div className='flex items-center justify-start gap-1'>
			<Dot size={40} className='text-[#7e4426] m-0 p-0' />
			<span className='mr-10 text-md font-semibold text-[#7e4426]'>
				Нет в наличии
			</span>
		</div>
	)

	return (
		<div className='flex flex-col gap-2'>
			<h2 className='text-4xl' style={{ fontFamily: 'Fraunces' }}>
				Ягодный бисквит
			</h2>
			{isActive}
			<p className='text-md'>
				Лёгкий бисквит на йогуртовой основе, прослойка из свежей малины и лесной
				ежевики, воздушный крем на маскарпоне. Печём в день заказа, без
				консервантов и стабилизаторов.
			</p>
			<p
				className='mt-6 text-4xl font-semibold'
				style={{ fontFamily: 'Fraunces' }}
			>
				2400 ₽
			</p>
			<div className='mt-4 flex justify-start items-center gap-4'>
				<div className='flex items-center border border-[#B98CAE] rounded-full'>
					<button
						className=' px-4 py-2 text-[#B98CAE]'
						onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
					>
						-
					</button>
					<span className='px-4 py-2'>{quantity}</span>
					<button
						className='px-4 py-2 text-[#B98CAE]'
						onClick={() => setQuantity(quantity + 1)}
					>
						+
					</button>
				</div>
				<button
					className='flex items-center justify-center gap-2 bg-[#B98CAE] text-white px-3 py-3 rounded-full hover:bg-[#b98caec8] transition-colors duration-300 shadow-md'
					onClick={handleAddToCart}
				>
					<ShoppingBasket size={26} />
					<span>Добавить в корзину</span>
				</button>
			</div>
			<NutritionFacts />
		</div>
	)
}
