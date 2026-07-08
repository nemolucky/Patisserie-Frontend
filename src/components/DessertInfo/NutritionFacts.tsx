export const NutritionFacts = () => {
	return (
		<div className='mt-4 w-full bg-white rounded-2xl pt-4 pb-8 px-6 flex flex-col gap-4 shadow-md'>
			<h3 className='text-lg font-semibold'>Пищевая ценность</h3>
			<ul className='flex justify-evenly list-disc list-inside'>
				<li className='flex flex-col items-center'>
					<span className='font-bold text-xl'>350</span>
					<span className='text-md text-[#4b3b36d0]'>ккал</span>
				</li>
				<li className='flex flex-col items-center'>
					<span className='font-bold text-xl'>25 г</span>
					<span className='text-md text-[#4b3b36d0]'>белки</span>
				</li>
				<li className='flex flex-col items-center'>
					<span className='font-bold text-xl'>15 г</span>
					<span className='text-md text-[#4b3b36d0]'>жиры</span>
				</li>
				<li className='flex flex-col items-center'>
					<span className='font-bold text-xl'>45 г</span>
					<span className='text-md text-[#4b3b36d0]'>углеводы</span>
				</li>
				<li className='flex flex-col items-center'>
					<span className='font-bold text-xl'>350 г</span>
					<span className='text-md text-[#4b3b36d0]'>вес</span>
				</li>
			</ul>
		</div>
	)
}
