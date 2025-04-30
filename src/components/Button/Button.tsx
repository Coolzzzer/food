import { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import ButtonStyle from './Button.module.css'
import cn from 'classnames'
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	children: ReactNode;
	appearance?: 'big'| 'small'
}
export const Button: FC<ButtonProps> = ({children,className, appearance = 'small', ...props}) =>{
	return (
		<button className={cn(ButtonStyle.button, className, {
		[ButtonStyle['small']]: appearance === 'small',
		[ButtonStyle['big']]: appearance === 'big',
	})} {...props}>{children}</button>
	)
}