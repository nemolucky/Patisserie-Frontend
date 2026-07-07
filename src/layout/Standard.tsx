import { Outlet } from 'react-router-dom'
import { NavBar } from '../components/NavBar/NavBar'
import { Header } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer'

export const Layout = () => {
	return (
		<div className='min-h-screen flex flex-col px-7 pt-14  bg-[#FBF3EC]'>
			<Header />
			<NavBar />
			<main className='flex-1 pb-14'>
				<Outlet />
			</main>
			<Footer />
		</div>
	)
}
