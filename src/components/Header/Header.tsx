export const Header = () => {
	return (
		<header className='flex items-center justify-center flex-col gap-3'>
			<h1
				className='text-4xl sm:text-5xl 2xl:text-6xl font-semibold text-[#4B3B36]'
				style={{ fontFamily: 'Fraunces' }}
			>
				Patisserie
			</h1>
			<p className='text-lg sm:text-xl 2xl:text-2xl text-[#4b3b36bd] text-center'>
				домашние десерты <br /> ручной работы в Cамаре
			</p>
		</header>
	)
}
