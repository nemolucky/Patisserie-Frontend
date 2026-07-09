import { ImagePicker } from '../components/ImagePicker/ImagePicker'
import { DESSERTS_MOCK } from '../components/DessertList/dessert-mocks'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import type { IDessert } from '../types/catalog'
import { CategoryList } from '../components/DessertInfo/CategoryList'
import { DessertDescription } from '../components/DessertInfo/DessertDescription'

export const Dessert = () => {
	const { id } = useParams<{ id: string }>()

	const [dessert] = useState<IDessert | null>(fetchDessert(id))

	function fetchDessert(id: string): IDessert | undefined {
		try {
			// const response = await fetch(`http://localhost:3000/api/desserts/${id}`)
			const desserts = DESSERTS_MOCK.find(
				d => d.id === Number.parseInt(`${id}`),
			)
			console.log(desserts)
			return desserts
		} catch (error) {
			console.error('Error fetching dessert:', error)
		}
	}

	return (
		<div className='w-9/12 mx-auto'>
			<div className='mt-10 flex gap-10'>
				<ImagePicker images={dessert.images} />
				<div className='flex-1 flex flex-col gap-4'>
					<CategoryList
						categories={dessert.categories.map(category => category.title)}
					/>
					<DessertDescription
						title={dessert.title}
						description={dessert.description}
						price={dessert.price}
						nutritionFacts={dessert.facts}
					/>
				</div>
			</div>
		</div>
	)
}

export default Dessert
