import type { INutritionFacts } from '../../types/catalog'

interface Props {
	facts: INutritionFacts
}

export const NutritionFacts = ({ facts }: Props) => {
	return (
		<div className='mt-4 w-full bg-white rounded-2xl p-4 flex flex-col gap-4 shadow-md'>
			<h3 className='text-lg font-semibold'>Пищевая ценность</h3>
			<ul className='flex flex-col sm:flex-row sm:justify-evenly items-center gap-2 list-disc list-inside'>
				<li className='flex sm:flex-col sm:gap-0 gap-1 items-center'>
					<span className='font-bold text-xl'>{facts.calories}</span>
					<span className='text-md text-[#4b3b36d0]'>ккал</span>
				</li>
				<li className='flex sm:flex-col sm:gap-0 gap-1 items-center'>
					<span className='font-bold text-xl'>{facts.protein} г</span>
					<span className='text-md text-[#4b3b36d0]'>белки</span>
				</li>
				<li className='flex sm:flex-col sm:gap-0  gap-1 items-center'>
					<span className='font-bold text-xl'>{facts.fat} г</span>
					<span className='text-md text-[#4b3b36d0]'>жиры</span>
				</li>
				<li className='flex sm:flex-col sm:gap-0 gap-1 items-center'>
					<span className='font-bold text-xl'>{facts.carbohydrates} г</span>
					<span className='text-md text-[#4b3b36d0]'>углеводы</span>
				</li>
				<li className='flex sm:flex-col sm:gap-0 gap-1 items-center'>
					<span className='font-bold text-xl'>{facts.weight} г</span>
					<span className='text-md text-[#4b3b36d0]'>вес</span>
				</li>
			</ul>
		</div>
	)
}
