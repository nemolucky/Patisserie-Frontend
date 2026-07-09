interface Props {
	path: string
}

export const Certificate = ({ path }: Props) => {
	return (
		<div className='h-full shrink-0 flex flex-col gap-2 bg-white rounded-2xl px-4 py-4'>
			<img
				src={path}
				className='rounded-xl w-full h-full min-h-0 object-contain'
			></img>
		</div>
	)
}
