import { InputHTMLAttributes, FC } from 'react';
import SearchStyle from './Search.module.css';
import cn from 'classnames';

type SearchProps = InputHTMLAttributes<HTMLInputElement> & {
  isValid?: boolean;
};

export const Search: FC<SearchProps> = ({ isValid = true, className, ...props }) => {
  return (
		<div className={SearchStyle.wrapper}>
			<input
				className={cn(SearchStyle.input, className, {
					[SearchStyle.invalid]: !isValid, 
				})}
				{...props}
    	/>
			<img src='public/search.svg' className={SearchStyle.icon}/>
		</div>
  );
};
