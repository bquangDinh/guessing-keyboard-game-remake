import React from 'react';
import style from './style.module.scss'
import { GameLevels, GameStatuses, useStore } from '../../store';

export function LevelSelecting() {
	const { level, setLevel, status } = useStore()

	return <div className={style['level-selecting-container'] + ' upper-half-container p-5 bold-shadow flex justify-center items-center flex-col w-full'}>
			<label className={style['level-btn-container'] + ' radio-btn-container ' + (status === GameStatuses.PLAYING ? style['locked'] : '')}>
				<input type='radio' name="level-radio" checked={ level === GameLevels.EASY } onChange={(e) => {
					if (e.target.checked) {
						setLevel(GameLevels.EASY)
					}
				}}></input>
				<div className={style['custom'] + ' radio-div bold-shadow 2xl:text-base text-xs'}>Easy</div>

				<div className={style['gradient-overlay']}></div>
			</label>

			<label className={style['level-btn-container'] + ' radio-btn-container ' + (status === GameStatuses.PLAYING ? style['locked'] : '')}>
				<input type='radio' name="level-radio" checked={ level === GameLevels.NORMAL } onChange={(e) => {
					if (e.target.checked) {
						setLevel(GameLevels.NORMAL)
					}
				}}></input>
				<div className={style['custom'] + ' radio-div bold-shadow 2xl:text-base text-xs'}>Normal</div>

				<div className={style['gradient-overlay']}></div>
			</label>

			<label className={style['level-btn-container'] + ' radio-btn-container ' + (status === GameStatuses.PLAYING ? style['locked'] : '')}>
				<input type='radio' name="level-radio" checked={ level === GameLevels.HARDCORE } onChange={(e) => {
					if (e.target.checked) {
						setLevel(GameLevels.HARDCORE)
					}
				}}></input>
				<div className={style['custom'] + ' radio-div bold-shadow 2xl:text-base text-xs'}>Hardcore</div>

				<div className={style['gradient-overlay']}></div>
			</label>

			<label className={style['level-btn-container'] + ' radio-btn-container ' + (status === GameStatuses.PLAYING ? style['locked'] : '')}>
				<input type='radio' name="level-radio" checked={ level === GameLevels.SERIOUS } onChange={(e) => {
					if (e.target.checked) {
						setLevel(GameLevels.SERIOUS)
					}
				}}></input>
				<div className={style['custom'] + ' radio-div bold-shadow 2xl:text-base text-xs'}>Seriously?</div>

				<div className={style['gradient-overlay']}></div>
			</label>
	</div>
}