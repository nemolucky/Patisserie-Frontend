import { Dot } from 'lucide-react'
import { CertificateList } from '../components/CertificateList/CertificateList'

export const About = () => {
	return (
		<div className='w-11/12 sm:w-9/12 md:w-10/12 mx-auto'>
			<div className='mt-10 lg:grid lg:grid-cols-3 gap-8 flex flex-col'>
				<div className='order-2 lg:order-1 lg:col-span-2 flex flex-col gap-8'>
					<h2
						className='text-2xl text-[#4B3B36] sm:text-3xl xl:text-4xl '
						style={{ fontFamily: 'Fraunces' }}
					>
						Кондитерская, которая началась с одной домашней духовки
					</h2>
					<p className='text-md text-justify text-[#4b3b36bd] sm:text-lg lg:text-xl'>
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
					<div className='flex flex-col'>
						<span
							className='text-2xl italic xl:text-3xl'
							style={{ fontFamily: 'Fraunces' }}
						>
							Елена
						</span>
						<p className='flex items-center text-md text-center sm:text-lg xl:text-xl lowercase text-[#4b3b3673]'>
							Кондитер
							<Dot size={16}></Dot> Основательница «Пудры»
						</p>
						<ul className='mt-8 flex items-start justify-between gap-2'>
							<li className='flex flex-col items-center justify-center'>
								<span
									className='text-xl sm:text-2xl xl:text-3xl '
									style={{ fontFamily: 'Fraunces' }}
								>
									6 л
								</span>
								<span className='text-sm sm:text-lg xl:text-xl text-[#4b3b3673]'>
									опыта
								</span>
							</li>
							<li className='flex flex-col items-center justify-center'>
								<span
									className='text-xl sm:text-2xl xl:text-3xl '
									style={{ fontFamily: 'Fraunces' }}
								>
									100+
								</span>
								<span className='text-sm text-center sm:text-lg xl:text-xl text-[#4b3b3673]'>
									готовых рецептов
								</span>
							</li>
							<li className='flex flex-col items-center justify-center'>
								<span
									className='text-xl sm:text-2xl xl:text-3xl '
									style={{ fontFamily: 'Fraunces' }}
								>
									10+
								</span>
								<span className='text-sm text-center sm:text-lg xl:text-xl text-[#4b3b3673]'>
									курса и сертификатов
								</span>
							</li>
						</ul>
					</div>
					<div>
						<h3
							className='text-2xl text-[#4B3B36] xl:text-3xl'
							style={{ fontFamily: 'Fraunces' }}
						>
							Сертификаты и обучение
						</h3>
						<p className='mt-2 text-sm sm:text-md xl:text-lg font-semibold text-[#4b3b3673]'>
							Листайте вправо - курсов больше, чем кажется
						</p>
					</div>
					<CertificateList></CertificateList>
				</div>
				<img
					src='src/assets/hero-2.jpg'
					alt='Кондитер'
					className='order-1 lg:order-2 w-min mx-auto max-h-100 lg:max-h-none lg:object-cover lg:w-full lg:aspect-2/3 object-contain shadow-md rounded-2xl shadow-[#4b3b3637]'
				/>
			</div>
		</div>
	)
}

export default About
