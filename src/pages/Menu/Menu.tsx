import { Headling } from "../../components/Headling/Headling"
import { Search } from "../../components/Search/Search"
import { Card } from "../../components/Card/Card"
import MenuStyle from "./Menu.module.css"

export const Menu = () =>{
	return (
		<>
			<div className={MenuStyle.head}>
				<Headling>Menu</Headling>
				<Search placeholder='Enter food...'/>
			</div>
			<Card 
					id={1} 
					title="ads" 
					price={213} 
					description="asdasd" 
					image="public/Снимок.PNG" 
					rating={21}>
				</Card>
		</>
	)
}