import { GuaranteeList } from '../components/GuaranteeList/GuaranteeList'

export const Guarantee = () => {
	return (
		<div className='w-11/12 sm:w-9/12 md:w-10/12  mx-auto'>
			<div className='mt-10 flex flex-col gap-6'>
				<h2
					className='text-3xl md:text-4xl text-[#4B3B36]'
					style={{ fontFamily: 'Fraunces' }}
				>
					Условия и гарантии
				</h2>
				<p className='text-md md:text-lg text-justify text-[#4b3b36bd]'>
					Я пеку сама — от теста до последнего декора, без цеха и наёмных
					кондитеров. Это значит более тёплый и внимательный подход к каждому
					заказу, но и определённые ограничения по срокам и объёму. Ниже —
					честно обо всех условиях, чтобы не было сюрпризов ни у вас, ни у меня.
				</p>
				<GuaranteeList></GuaranteeList>
			</div>
		</div>
	)
}

export default Guarantee
