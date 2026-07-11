interface Props {
	categories: string[]
}

export const CategoryList = ({ categories }: Props) => {
	if (!categories) return
	return (
		<div className='flex gap-4'>
			{categories.map((category, index) => (
				<span
					key={index}
					className='flex items-center justify-center text-center py-1.5 px-4 bg-[#C8E6CB] text-sm text-black uppercase rounded-2xl'
				>
					{category}
				</span>
			))}
		</div>
	)
}
