import React from 'react';
import style from './style.module.scss'

export function LevelSelecting() {
	return <div className={style['level-selecting-container'] + ' p-10 bold-shadow flex justify-center items-center flex-col w-full'}>
			<label className={style['level-btn-container'] + ' radio-btn-container'}>
				<input type='radio' name="level-radio" defaultChecked></input>
				<div className='radio-div bold-shadow'>Easy</div>
			</label>

			<label className={style['level-btn-container'] + ' radio-btn-container'}>
				<input type='radio' name="level-radio"></input>
				<div className='radio-div bold-shadow'>Normal</div>
			</label>

			<label className={style['level-btn-container'] + ' radio-btn-container'}>
				<input type='radio' name="level-radio"></input>
				<div className='radio-div bold-shadow'>Hardcore</div>
			</label>

			<label className={style['level-btn-container'] + ' radio-btn-container'}>
				<input type='radio' name="level-radio"></input>
				<div className='radio-div bold-shadow'>Seriously?</div>
			</label>
	</div>
}