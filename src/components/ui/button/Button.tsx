import cn from 'clsx'
import { FC } from 'react'
import styles from './Button.module.scss'

interface IButton {
	text: string
	className?: string
	onClick?: () => void
}

export const Button: FC<IButton> = ({ text, className, onClick }) => {
	return (
		<button className={cn(styles.btn, className)} onClick={onClick}>
			{text}
		</button>
	)
}
