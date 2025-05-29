import { Headling } from "../../components/Headling/Headling"
import { Search } from "../../components/Search/Search"
import MenuStyle from "./Menu.module.css"
import { PREFIX } from "../../helpers/API"
import { Product } from "../../interfaces/product.interface"
import { useEffect, useState } from "react"
import axios, { AxiosError } from "axios"
import { MenuList } from "./MenuList/MenuList"

export const Menu = () =>{
	const [products, setProducts] = useState<Product[]>([])
	const [isLoading, setLoading] = useState<boolean>(false)
	const [error, setError] = useState<string | undefined>()
	const getMenu = async () =>{
		try{
			setLoading(true)
			await new Promise <void>((resolve)=>{
				setTimeout(()=>{
					resolve();
				},2000)
			})
			const {data} = await axios.get<Product[]>(`${PREFIX}/products`)
			setProducts(data);
			setLoading(false)
		}catch(e){
			console.error(e)
			if (e instanceof AxiosError){
				setError(e.message)
			}
			setLoading(false)
			return
		}
	}
	useEffect(()=>{getMenu()},[])
	return (
		<>
			<div className={MenuStyle.head}>
				<Headling>Menu</Headling>
				<Search placeholder='Enter food...'/>
			</div>
			{error && <>{error}</>}
			<div className={MenuStyle.cards}>
				{!isLoading && <MenuList products={products}/>}
			</div>
			{isLoading && <>Loading...</>}
		</>
	)
}