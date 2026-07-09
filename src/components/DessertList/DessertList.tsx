import { useEffect, useState } from 'react'
import { DessertCard } from './DessertCard'
import type { IDessertCatalog } from '../../types/catalog'
import { DESSERTS_CATALOG_MOCK } from './dessert-mocks'

export const DessertList = () => {
	const [desserts, setDesserts] = useState<IDessertCatalog[]>([])

	async function fetchDesserts(): Promise<IDessertCatalog[]> {
		try {
			// const response = await fetch('http://localhost:3000/api/desserts')
			// const data = await response.json()
			return DESSERTS_CATALOG_MOCK
		} catch (error) {
			console.error('Error fetching desserts:', error)
		}
	}

	useEffect(() => {
		fetchDesserts().then(res => setDesserts(res))
	}, [])

	return (
		<div className='mt-4 grid grid-cols-1 lg:grid-cols-2 gap-6'>
			{desserts.map(dessert => (
				<DessertCard key={dessert.id} dessert={dessert} />
			))}
		</div>
	)
}
