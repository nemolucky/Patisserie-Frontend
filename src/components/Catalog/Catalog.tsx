import { ProductCard } from '../ProductCard/ProductCard'

export const Catalog = () => {
	return (
		<div className='flex-3'>
			<h2
				className='text-3xl text-[#4B3B36]'
				style={{ fontFamily: 'Fraunces' }}
			>
				Каталог
			</h2>
			<div className='mt-8 grid grid-cols-2 gap-6'>
				<ProductCard></ProductCard>
				<ProductCard></ProductCard>
				<ProductCard></ProductCard>
				<ProductCard></ProductCard>
				<ProductCard></ProductCard>
				<ProductCard></ProductCard>
				<ProductCard></ProductCard>
				<ProductCard></ProductCard>
			</div>
		</div>
	)
}
