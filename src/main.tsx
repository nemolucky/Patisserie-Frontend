import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './layout/Standard'
import Dessert from './screens/Dessert'
import Cart from './screens/Cart'
import About from './screens/About'
import { Guarantee } from './screens/Guarantee'
import Catalog from './screens/Catalog'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter basename='/Patisserie-Frontend/'>
			<Routes>
				<Route element={<Layout />}>
					<Route path='/' element={<Catalog />} />
					<Route path='/dessert/:id' element={<Dessert />} />
					{/* <Route path='/favorites' element={<Product />} /> */}
					<Route path='/cart' element={<Cart />} />
					<Route path='/about' element={<About />} />
					<Route path='/guarantee' element={<Guarantee />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</StrictMode>,
)
