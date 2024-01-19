import React from 'react';
import style from './style.module.scss'

export function LevelSelecting() {
	return <div className={style['level-selecting-container'] + ' upper-half-container p-10 bold-shadow flex justify-center items-center flex-col w-full'}>
			<label className={style['level-btn-container'] + ' radio-btn-container'}>
				<input type='radio' name="level-radio" defaultChecked></input>
				<div className='radio-div bold-shadow 2xl:text-base text-xs'>Easy</div>
			</label>

			<label className={style['level-btn-container'] + ' radio-btn-container'}>
				<input type='radio' name="level-radio"></input>
				<div className='radio-div bold-shadow 2xl:text-base text-xs'>Normal</div>
			</label>

			<label className={style['level-btn-container'] + ' radio-btn-container'}>
				<input type='radio' name="level-radio"></input>
				<div className='radio-div bold-shadow 2xl:text-base text-xs'>Hardcore</div>
			</label>

			<label className={style['level-btn-container'] + ' radio-btn-container'}>
				<input type='radio' name="level-radio"></input>
				<div className='radio-div bold-shadow 2xl:text-base text-xs'>Seriously?</div>
			</label>
	</div>
}