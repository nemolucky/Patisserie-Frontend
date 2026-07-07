import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './layout/Standard'
import { Home } from './screens/Home'
import Product from './screens/Product'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path='/' element={<Home />} />
					<Route path='/product' element={<Product />} />
					<Route path='/favorites' element={<Product />} />
					<Route path='/cart' element={<Product />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</StrictMode>,
)
