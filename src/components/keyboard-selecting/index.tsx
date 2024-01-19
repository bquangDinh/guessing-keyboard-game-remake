import React from "react";
import style from './style.module.scss'
import { useStore, Keyboard } from "../../store";

export function KeyboardSelecting() {
	const { keyboard, setKeyboard } = useStore()

	return <div className={style['keyboard-selecting-container'] + ' w-full'}>
		<table className='w-full h-full'>
			<tr>
				<td>
					<div className='w-full h-full flex justify-center items-center'>
						<label className={'radio-btn-container ' + style['customized-radio']}>
							<input type='radio' name="keyboard-radio" checked={keyboard === Keyboard.ANSI104} onChange={(e) => {
								if (e.target.checked) {
									setKeyboard(Keyboard.ANSI104)
								}
							}}></input>
							<div className={style['customized-radio-div'] + ' radio-div bold-shadow 2xl:text-base text-xs'}>ANSI 104</div>
						</label>
					</div>
				</td>
				<td>
					<div className='w-full h-full flex justify-center items-center'>
						<label className={'radio-btn-container ' + style['customized-radio']}>
							<input type='radio' name="keyboard-radio" checked={keyboard === Keyboard.DEFAULT60} onChange={(e) => {
								if (e.target.checked) {
									setKeyboard(Keyboard.DEFAULT60)
								}
							}}></input>
							<div className={style['customized-radio-div'] + ' radio-div bold-shadow 2xl:text-base text-xs'}>DEFAULT 60%</div>
						</label>
					</div>
				</td>
				<td>
					<div className='w-full h-full flex justify-center items-center'>
						<label className={'radio-btn-container ' + style['customized-radio']}>
							<input type='radio' name="keyboard-radio" checked={keyboard === Keyboard.JD40} onChange={(e) => {
								if (e.target.checked) {
									setKeyboard(Keyboard.JD40)
								}
							}}></input>
							<div className={style['customized-radio-div'] + ' radio-div bold-shadow 2xl:text-base text-xs'}>JD40</div>
						</label>
					</div>
				</td>
			</tr>
			<tr>
				<td>
					<div className='w-full h-full flex justify-center items-center'>
						<label className={'radio-btn-container ' + style['customized-radio']}>
							<input type='radio' name="keyboard-radio" checked={keyboard === Keyboard.PLANCK} onChange={(e) => {
								if (e.target.checked) {
									setKeyboard(Keyboard.PLANCK)
								}
							}}></input>
							<div className={style['customized-radio-div'] + ' radio-div bold-shadow 2xl:text-base text-xs'}>PLANCK</div>
						</label>
					</div>
				</td>
				<td>
					<div className='w-full h-full flex justify-center items-center'>
						<label className={'radio-btn-container ' + style['customized-radio']}>
							<input type='radio' name="keyboard-radio" checked={keyboard === Keyboard.LEOPOLD} onChange={(e) => {
								if (e.target.checked) {
									setKeyboard(Keyboard.LEOPOLD)
								}
							}}></input>
							<div className={style['customized-radio-div'] + ' radio-div bold-shadow 2xl:text-base text-xs'}>Leopold</div>
						</label>
					</div>
				</td>
				<td>
					<div className='w-full h-full flex justify-center items-center'>
						<label className={'radio-btn-container ' + style['customized-radio']} data-dummy="true">
							<div className={style['dummy'] + ' bold-shadow'}></div>
						</label>
					</div>
				</td>
			</tr>
		</table>
	</div>
}