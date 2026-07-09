import { useState } from 'react'
import type { IDessertImage } from '../../types/catalog'

interface Props {
	images: IDessertImage[]
}

export const ImagePicker = ({ images }: Props) => {
	const [selected, setSelected] = useState<IDessertImage | null>(
		images.find(image => image.sortOrder === 1),
	)

	const imagesWithoutSelected = images.filter(
		image => image.id !== selected?.id,
	)

	return (
		<div className='flex-1 flex flex-col'>
			<img
				src={selected.url}
				alt={selected.sortOrder?.toString() ?? ''}
				className='aspect-9/7 rounded-s-2xl rounded-ee-2xl shadow-md'
			/>
			<div className='mt-4 py-2 flex gap-4 overflow-scroll scrollbar-none'>
				{imagesWithoutSelected.map(image => (
					<button
						key={`img${image.id}`}
						onClick={() => setSelected({ ...image })}
					>
						<img
							src={image.url}
							alt={image.sortOrder?.toString() ?? ''}
							className='aspect-9/7 h-28 rounded-2xl shadow-md'
						/>
					</button>
				))}
			</div>
		</div>
	)
}
