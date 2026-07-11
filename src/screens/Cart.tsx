import { Pen } from 'lucide-react'
import { CartSummary } from '../components/CartSummary/CartSummary'
import { DessertList } from '../components/DessertList/DessertList'

export const Cart = () => {
	return (
		<div className='w-11/12 sm:w-9/12 md:w-10/12 mx-auto'>
			<h2
				className='mt-10 text-2xl sm:text-3xl md:text-4xl text-[#4B3B36]'
				style={{ fontFamily: 'Fraunces' }}
			>
				Корзина
			</h2>
			<div className='mt-4 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 sm:gap-4 lg:gap-6'>
				<div className='order-2 md:order-1 md:col-span-3 lg:col-span-4'>
					<DessertList></DessertList>
				</div>
				<div className='order-1 md:order-2 flex flex-col gap-4'>
					<CartSummary></CartSummary>
					<button className='bg-[#B98CAE] w-full px-4 py-3 rounded-4xl shadow-2xl'>
						<span className='flex items-center justify-center gap-4 text-white text-lg'>
							Сделать заказ
							<Pen size={16} />
						</span>
					</button>
				</div>
			</div>
		</div>
	)
}

export default Cart
