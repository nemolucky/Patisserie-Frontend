export const Guarantee = () => {
	return (
		<div className='w-9/12 mx-auto'>
			<div className='mt-10 grid grid-cols-2 gap-8'>
				<div className='flex flex-col gap-8'>
					<h2
						className='text-4xl text-[#4B3B36]'
						style={{ fontFamily: 'Fraunces' }}
					>
						Кондитерская, которая началась с одной домашней духовки
					</h2>
					<p className='text-lg text-[#4b3b36bd]'>
						Меня зовут Елена, и «Пудра» началась не с бизнес-плана, а с того,
						что друзья постоянно просили испечь ещё один торт «на праздник».
						Через полтора года домашняя кухня превратилась в маленькую
						мастерскую, а увлечение — в дело, которым я занимаюсь каждый день.
						<br />
						<br />Я работаю без ассистентов на кухне — каждый торт и каждое
						печенье собираю сама, от теста до последнего штриха декора.
						Использую только свежие продукты и не добавляю консерванты, поэтому
						все десерты готовятся под заказ.
					</p>
					<div>
						<h3
							className='text-2xl text-[#4B3B36]'
							style={{ fontFamily: 'Fraunces' }}
						>
							Сертификаты и обучение
						</h3>
						<p className='mt-2 text-sm font-semibold text-[#4b3b3673]'>
							Листайте вправо - курсов больше, чем кажется
						</p>
					</div>
					<div className='h-60 flex gap-4 overflow-scroll scrollbar-none'>
						<div className='bg-white aspect-9/6 rounded-2xl'></div>
						<div className='bg-gray-300 aspect-9/6 rounded-2xl'></div>
						<div className='bg-gray-300 aspect-9/6 rounded-2xl'></div>
						<div className='bg-gray-300 aspect-9/6 rounded-2xl'></div>
						<div className='bg-white aspect-9/6 rounded-2xl'></div>
						<div className='bg-gray-300 aspect-9/6 rounded-2xl'></div>
						<div className='bg-gray-300 aspect-9/6 rounded-2xl'></div>
						<div className='bg-gray-300 aspect-9/6 rounded-2xl'></div>
					</div>
				</div>
				<img
					src='../../public/person-cake.png'
					alt='Кондитер'
					className='w-full h-full object-cover rounded-2xl'
				/>
			</div>
		</div>
	)
}

export default Guarantee
