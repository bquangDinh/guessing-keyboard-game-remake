import React from 'react';
import style from './style.module.scss'
import { GameLevel, useStore } from '../../store';

export function LevelSelecting() {
	const { level, setLevel } = useStore()

	return <div className={style['level-selecting-container'] + ' upper-half-container p-10 bold-shadow flex justify-center items-center flex-col w-full'}>
			<label className={style['level-btn-container'] + ' radio-btn-container'}>
				<input type='radio' name="level-radio" checked={ level === GameLevel.EASY } onChange={(e) => {
					if (e.target.checked) {
						setLevel(GameLevel.EASY)
					}
				}}></input>
				<div className='radio-div bold-shadow 2xl:text-base text-xs'>Easy</div>
			</label>

			<label className={style['level-btn-container'] + ' radio-btn-container'}>
				<input type='radio' name="level-radio" checked={ level === GameLevel.NORMAL } onChange={(e) => {
					if (e.target.checked) {
						setLevel(GameLevel.NORMAL)
					}
				}}></input>
				<div className='radio-div bold-shadow 2xl:text-base text-xs'>Normal</div>
			</label>

			<label className={style['level-btn-container'] + ' radio-btn-container'}>
				<input type='radio' name="level-radio" checked={ level === GameLevel.HARDCORE } onChange={(e) => {
					if (e.target.checked) {
						setLevel(GameLevel.HARDCORE)
					}
				}}></input>
				<div className='radio-div bold-shadow 2xl:text-base text-xs'>Hardcore</div>
			</label>

			<label className={style['level-btn-container'] + ' radio-btn-container'}>
				<input type='radio' name="level-radio" checked={ level === GameLevel.SERIOUS } onChange={(e) => {
					if (e.target.checked) {
						setLevel(GameLevel.SERIOUS)
					}
				}}></input>
				<div className='radio-div bold-shadow 2xl:text-base text-xs'>Seriously?</div>
			</label>
	</div>
}