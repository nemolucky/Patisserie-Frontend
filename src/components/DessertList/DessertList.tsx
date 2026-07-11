import { useState } from 'react'
import { DessertCard } from './DessertCard'
import type { IDessertCatalog } from '../../types/catalog'
import { DESSERTS_CATALOG_MOCK } from './dessert-mocks'

export const DessertList = () => {
	const [desserts] = useState<IDessertCatalog[]>(DESSERTS_CATALOG_MOCK)

	return (
		<div className='mt-4 grid grid-cols-1 lg:grid-cols-2 gap-6'>
			{desserts.map(dessert => (
				<DessertCard key={dessert.id} dessert={dessert} />
			))}
		</div>
	)
}
