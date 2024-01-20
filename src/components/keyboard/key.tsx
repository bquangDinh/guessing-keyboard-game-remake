import React from 'react'
import style from './style.module.scss'

type Props = {
	keyname: string,
	x: number,
	y: number,
	w: number,
	h: number
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export function Key({ keyname, x, y, w, h, className, style : st, ...divProps }: Props) {
	return <div
		className={style['key'] + ' ' + className ?? ''}
		style={{
			...st,
			width: `${w}px`,
			height: `${h}px`,
			left: `${x}px`,
			top: `${y}px`
		}}
		{...divProps}
	>
			<div className={style['bottom-div']}>
				<div
					className={style['arrow'] + ' ' + style['left-arrow']}
					style={{
						borderTopWidth: `${(h - 10) / 2}px`,
						borderBottomWidth: `${(h - 10) / 2}px`,
						borderLeftWidth: `${((w - 10) / 2) - 5}px`,
					}}
				></div>
				<div
					className={style['arrow'] + ' ' + style['right-arrow']}
					style={{
						borderTopWidth: `${(h - 10) / 2}px`,
						borderBottomWidth: `${(h - 10) / 2}px`,
						borderRightWidth: `${((w - 10) / 2) - 5}px`,
					}}
				></div>
				<div
					className={style['arrow'] + ' ' + style['top-arrow']}
					style={{
						borderRightWidth: `${(w - 10) / 2}px`,
						borderLeftWidth: `${(w - 10) / 2}px`,
						borderTopWidth: `${((h - 10) / 2) - 5}px`,
					}}
				></div>
				<div
					className={style['arrow'] + ' ' + style['bottom-arrow']}
					style={{
						borderRightWidth: `${(w - 10) / 2}px`,
						borderLeftWidth: `${(w - 10) / 2}px`,
						borderBottomWidth: `${((h - 10) / 2) - 5}px`,
					}}
				></div>
			</div>
			<div className={style['top-div']}>
				<div className={style['keyname']}>{ keyname }</div>
			</div>
		</div>
}