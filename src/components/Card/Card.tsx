import CardStyle from './Card.module.css'
type CardProps = {
	id: number
	title: string;
	description: string;
	image: string;
	price: number;
	rating: number
}

export const Card = (props: CardProps)=>{
	return (
		<div className={CardStyle.card}>
			<div className={CardStyle.head}>
				<div className={CardStyle.headString}>
					<div className={CardStyle.price}>
						{props.price}
						<span className={CardStyle.currency}>₽</span>
					</div>
					<button className={CardStyle.addToCard}>
						<img src="public/cart.svg" className={CardStyle.addToCardImg}/>
					</button>
				</div>
				<div className={CardStyle.rating}>
					{props.rating}
					<img className={CardStyle.star} src="public/star.svg"/>
				</div>
			</div>
			<div className={CardStyle.footer}>
				<img className={CardStyle.image} src={props.image} />
				<div className={CardStyle.title}>{props.title}</div>
				<div className={CardStyle.description}>{props.description}</div>
			</div>
		</div>
	)
}