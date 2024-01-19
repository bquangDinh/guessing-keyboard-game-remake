import React from "react";
import style from './style.module.scss'
import { useStore } from "../../store";

export function Scoreboard() {
	const { score, missed } = useStore()

	return <div className={style['scoreboard-container'] + ' upper-half-container bold-shadow flex justify-around items-center flex-col'}>
		<div className='w-9/12'>
			<p className='text-center text-xl'>Score</p>
			<p className={style['score-text'] + ' text-center text-8xl text-white'}>{ score }</p>
		</div>

		<div className='w-9/12 mt-2'>
			<p className='text-center'>Missed</p>
			<p className={style['missed-text'] + ' text-center text-7xl'}>{ missed }</p>
		</div>
	</div>
}