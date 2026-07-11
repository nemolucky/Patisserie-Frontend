import { ImagePicker } from '../components/ImagePicker/ImagePicker'
import { DESSERTS_MOCK } from '../components/DessertList/dessert-mocks'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import type { IDessert } from '../types/catalog'
import { CategoryList } from '../components/DessertInfo/CategoryList'
import { DessertDescription } from '../components/DessertInfo/DessertDescription'

export const Dessert = () => {
	const { id } = useParams<{ id: string }>()

	const [dessert] = useState<IDessert | undefined>(fetchDessert(id))

	function fetchDessert(id: string | undefined): IDessert | undefined {
		try {
			if (!id) return undefined
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

	if (!dessert) return <div>Loading...</div>

	return (
		<div className='w-11/12  sm:w-9/12 md:w-10/12 mx-auto'>
			<div className='mt-10 flex flex-col xl:flex-row md:items-center gap-4 xl:gap-8'>
				<ImagePicker images={dessert?.images} />
				<div className='flex-1 flex flex-col gap-4'>
					<CategoryList
						categories={dessert?.categories.map(category => category.title)}
					/>
					<DessertDescription
						title={dessert?.title}
						description={dessert?.description}
						price={dessert?.price}
						nutritionFacts={dessert?.facts}
					/>
				</div>
			</div>
		</div>
	)
}

export default Dessert
