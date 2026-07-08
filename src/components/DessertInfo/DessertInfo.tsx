import { CategoryList } from './CategoryList'
import { DessertDescription } from './DessertDescription'

export const DessertInfo = () => {
	return (
		<div className='flex-1 flex flex-col gap-4'>
			<CategoryList />
			<DessertDescription />
		</div>
	)
}
