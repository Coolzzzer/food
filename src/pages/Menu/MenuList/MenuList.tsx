import { Card } from "../../../components/Card/Card"
import { Product } from "../../../interfaces/product.interface"

type MenuListProps = {
	products: Product[]
}

export function MenuList ({products}:MenuListProps) {
	return (
		<>
			{products.map(p =>(
				<Card 
					key={p.id}
					id={p.id} 
					title={p.name} 
					price={p.price} 
					description={p.ingredients.join(', ')} 
					image={p.image}
					rating={p.rating}>
				</Card>
			))}
		</>
	)
}