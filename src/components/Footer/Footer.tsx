export const Footer = () => {
	return (
		<footer
			className='w-full  bg-[#4b3b36] 
		grid grid-cols-4 gap-4 items-center rounded-t-full px-30 py-10'
		>
			<div className='flex flex-col gap-2'>
				<span
					className='text-3xl text-white'
					style={{ fontFamily: 'Fraunces' }}
				>
					Patisserie
				</span>
				<span className='text-sm text-zinc-200'>
					Домашние десерты ручной работы. Печём на заказ и привозим свежими день
					в день.
				</span>
			</div>
			<div className='flex flex-col items-start justify-center gap-2'>
				<p className='text-white text-sm'>Контакты: +7 (987) 654-32-10</p>
				<p className='text-white text-sm'>
					© 2023 Patisserie. All rights reserved.
				</p>
			</div>
			<div className='flex flex-col items-start justify-center gap-2'>
				<p className='text-white text-sm'>Контакты: +7 (987) 654-32-10</p>
				<p className='text-white text-sm'>
					© 2023 Patisserie. All rights reserved.
				</p>
			</div>
			<div className='flex flex-col items-start justify-center gap-2'>
				<p className='text-white text-sm'>Контакты: +7 (987) 654-32-10</p>
				<p className='text-white text-sm'>
					© 2023 Patisserie. All rights reserved.
				</p>
			</div>
		</footer>
	)
}
