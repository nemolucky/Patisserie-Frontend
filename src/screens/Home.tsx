import { Catalog } from '../components/Catalog/Catalog'
import { Filters } from '../components/Filters/Filters'

export const Home = () => {
	return (
		<div className='w-10/12 mx-auto'>
			<div className='mt-10 flex gap-8'>
				<Catalog></Catalog>
				<Filters></Filters>
			</div>
		</div>
	)
}

export default Home
