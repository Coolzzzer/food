import { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import ButtonStyle from './Button.module.css'
import cn from 'classnames'
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	children: ReactNode;
}
export const Button: FC<ButtonProps> = ({children,className, ...props}) =>{
	return (
		<button className={cn(ButtonStyle.button, className)} {...props}>{children}</button>
	)
}