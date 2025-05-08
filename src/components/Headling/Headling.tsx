import { HTMLAttributes, ReactNode } from 'react'
import HeadlingStyle from './Headling.module.css'
import cn from 'classnames'
type HeadlingProps = HTMLAttributes<HTMLHeadingElement> & {
	children: ReactNode;
}

export const Headling = ({children,className, ...props}:HeadlingProps) =>{
	return (
		<div className={cn(className, HeadlingStyle.text)} {...props}>{children}</div>
	)
}