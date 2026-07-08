import { CartSummary } from '../components/CartSummary/CartSummary'
import { DessertList } from '../components/DessertList/DessertList'

export const Cart = () => {
	return (
		<div className='w-9/12 mx-auto'>
			<div className='mt-10 flex gap-8'>
				<div className='flex-3'>
					<h2
						className='text-3xl text-[#4B3B36]'
						style={{ fontFamily: 'Fraunces' }}
					>
						Корзина
					</h2>
					<DessertList></DessertList>
				</div>
				<div className='flex-1'>
					<CartSummary></CartSummary>
				</div>
			</div>
		</div>
	)
}

export default Cart
