import { Equal, RussianRuble, X } from 'lucide-react'
import { CART_MOCK } from './cart_mock'

export const CartSummary = () => {
	return (
		<div className=' bg-white flex flex-col gap-4 rounded-4xl shadow-lg px-4 py-6'>
			{CART_MOCK.map(item => (
				<div key={item.id} className='flex flex-col gap-2'>
					<div className='flex flex-wrap items-center'>
						<p className='text-lg font-semibold text-wrap'>{item.title}</p>
					</div>
					<div className='ml-4 flex flex-wrap gap-1 items-center'>
						<p>{item.price}</p>
						<span>
							<X size={16} />
						</span>
						<p>{item.quantity}</p>
						<span>
							<Equal size={16} />
						</span>
						<p className='flex items-center'>
							{item.price * item.quantity} <RussianRuble size={16} />
						</p>
					</div>
				</div>
			))}
			<div className='h-0.5 w-full bg-[#C8E6CB]'></div>
			<div className='flex flex-wrap justify-between'>
				<span className='text-xl font-bold'>Итого: </span>
				<h2 className='flex items-center'>
					<span className='text-lg'>
						{CART_MOCK.reduce(
							(acc, item) => acc + item.price * item.quantity,
							0,
						)}
					</span>
					<RussianRuble size={16} />
				</h2>
			</div>
		</div>
	)
}
