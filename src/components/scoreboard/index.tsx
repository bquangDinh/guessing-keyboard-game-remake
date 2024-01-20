import React from "react";
import style from './style.module.scss'
import { useStore } from "../../store";

export function Scoreboard() {
	const { score, missed } = useStore()

	return <div className={style['scoreboard-container'] + ' upper-half-container bold-shadow flex justify-around items-center flex-col'}>
		<div className='w-9/12'>
			<p className='text-center text-xl'>Score</p>
			<p className={style['score-text'] + ' text-center 2xl:text-8xl text-6xl text-white'}>{ score }</p>
		</div>

		<div className='w-9/12 mt-2'>
			<p className='text-center'>Missed</p>
			<p className={style['missed-text'] + ' text-center 2xl:text-7xl text-4xl'}>{ missed }</p>
		</div>
	</div>
}