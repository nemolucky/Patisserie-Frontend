import { useState } from 'react'
import type { IDessertImage } from '../../types/catalog'

interface Props {
	images: IDessertImage[]
}

export const ImagePicker = ({ images }: Props) => {
	const [selected, setSelected] = useState<IDessertImage | undefined>(
		images.find(image => image.sortOrder === 1) || images[0], // Фолбек на первую картинку, если sortOrder !== 1
	)

	const imagesWithoutSelected = images.filter(
		image => image.id !== selected?.id,
	)

	return (
		<div className='flex-1 flex flex-col lg:flex-row xl:flex-col xl:items-center lg:gap-8 min-w-0'>
			{' '}
			{/* min-w-0 предотвращает распирание flex-контейнера */}
			<img
				src={selected?.url}
				alt={selected?.sortOrder?.toString() ?? ''}
				className='md:max-h-96 md:w-lg w-full aspect-9/8 object-cover rounded-s-2xl rounded-ee-2xl shadow-md'
			/>
			{/* Горизонтальный скролл-контейнер */}
			<div className='mt-4 lg:mt-0 h-32 lg:max-h-96 lg:w-48 xl:w-full xl:max-w-lg lg:h-full xl:h-32 flex lg:flex-col xl:flex-row gap-4 overflow-x-auto scrollbar-none snap-x snap-mandatory'>
				{imagesWithoutSelected.map(image => (
					<button
						key={`img${image.id}`}
						onClick={() => setSelected({ ...image })}
						className='h-full lg:w-full xl:w-auto lg:h-auto xl:h-full aspect-9/7 shrink-0 snap-start'
					>
						<img
							src={image.url}
							alt={image.sortOrder?.toString() ?? ''}
							className='w-full h-full object-cover rounded-2xl shadow-md'
						/>
					</button>
				))}
			</div>
		</div>
	)
}
