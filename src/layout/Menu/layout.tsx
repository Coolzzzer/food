import { NavLink, Outlet } from "react-router-dom"
import LayoutStyle from './Layout.module.css'
import { Button } from "../../components/Button/Button"
import cn from 'classnames'

export const Layout = () =>{
	return (
		<div className={LayoutStyle.layout}>
			<div className={LayoutStyle.sidebar}>
				<div className={LayoutStyle.user}>
					<img src='public/user.svg' width='100vh'/>
					<div className={LayoutStyle.name}>Zhuk Andrey</div>
					<div className={LayoutStyle.email}>Zhuk@gmail.com</div>
				</div>
				<div className={LayoutStyle.menu}>
					<NavLink to='/' className={({isActive})=>cn(LayoutStyle.link, {
						[LayoutStyle.active]: isActive
					})}>	
						<img src='public/menu.svg' width='12vh'/>Menu 
					</NavLink>
					<NavLink to='/cart' className={({isActive})=>cn(LayoutStyle.link, {
						[LayoutStyle.active]: isActive
					})}>
						<img src='public/cart.svg' width='12vh'/>Cart
					</NavLink>
				</div>
				<Button appearance="small" className={LayoutStyle.exit}>
					<img src='public/power.svg' width='15vh'/>
					exit
				</Button>
			</div>
			<div className={LayoutStyle.body}>
				<Outlet/>
			</div>
		</div>
	)
}