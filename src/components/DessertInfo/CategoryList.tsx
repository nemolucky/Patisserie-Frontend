interface Props {
	categories: string[]
}

export const CategoryList = ({ categories }: Props) => {
	return (
		<div className='flex gap-4'>
			{categories.map((category, index) => (
				<span
					key={index}
					className='py-2 px-4 bg-[#C8E6CB] text-sm text-black uppercase rounded-2xl'
				>
					{category}
				</span>
			))}
		</div>
	)
}
