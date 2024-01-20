import { ReactElement, useEffect, useRef, useState } from 'react'
import { KEYBOARD_LAYOUTS, KeyboardLayout } from '../../configs/keyboards.config'
import { GameStatuses, Keyboards, useStore } from '../../store'
import style from './style.module.scss'
import { Key } from './key'

type RenderingKeyConfig = {
	size: {
		w: number
		h: number
	},
	pos: {
		x: number
		y: number
	}
}

export function Keyboard() {
	const [keyboardLayout, setKeyboardLayout] = useState<KeyboardLayout>()

	const keyboardContainerInnerRef = useRef<HTMLDivElement>(null)

	const { keyboard, setPressedKey, currentCharacter, aboutToTimeout, status } = useStore()

	useEffect(() => {
		if (keyboard === Keyboards.ANSI104) {
			setKeyboardLayout(KEYBOARD_LAYOUTS.ANSI104)
		}

		if (keyboard === Keyboards.DEFAULT60) {
			setKeyboardLayout(KEYBOARD_LAYOUTS.DEFAULT60)
		}

		if (keyboard === Keyboards.JD40) {
			setKeyboardLayout(KEYBOARD_LAYOUTS.JD40)
		}

		if (keyboard === Keyboards.PLANCK) {
			setKeyboardLayout(KEYBOARD_LAYOUTS.PLANCK)
		}

		if (keyboard === Keyboards.LEOPOLD) {
			setKeyboardLayout(KEYBOARD_LAYOUTS.LEOPOLD)
		}
	}, [keyboard])

	const buildKeyboardFromLayout = () => {
		if (!keyboardContainerInnerRef || !keyboardLayout) return <></>
		if (!keyboardContainerInnerRef.current) return <></>

		const DEFAULT_UNIT_KEY_SIZE = 60 // in pixels

		// Keyboard size thresholds
		const MAX_CONTAINER_WIDTH = window.innerWidth * 0.8;
		const MAX_CONTAINER_HEIGHT = window.innerHeight / 2;

		const numRows = keyboardLayout.length;

		let numCols = keyboardLayout[0].length;

		for (let i = 1; i < keyboardLayout.length; ++i) {
			if (keyboardLayout[i].length > numCols) numCols = keyboardLayout[i].length
		}

		// Recalculate key size if it goes over the threshold of size allowed
		let unitKeySize = DEFAULT_UNIT_KEY_SIZE;

		if (unitKeySize * numCols > MAX_CONTAINER_WIDTH || unitKeySize * numRows > MAX_CONTAINER_HEIGHT) {
			unitKeySize = Math.min(MAX_CONTAINER_WIDTH / numCols, MAX_CONTAINER_HEIGHT / numRows)
		}

		// Build keyboard by iterating over the layout configuration
		const keys: ReactElement[] = []

		let oldY = 0

		for (const [rowIndex, row] of keyboardLayout.entries()) {
			let oldKey: RenderingKeyConfig | null = null

			let lx = 0, ly = 0, lw = 1, lh = 1;

			let x = 0, y = 0, w = 0, h = 0

			for (const [keyIndex, key] of row.entries()) {
				if (typeof key === 'string') {
					// calculate size of the key
					w = unitKeySize * lw
					h = unitKeySize * lh

					// calculate the position of the key
					if (oldKey === null) {
						x = 0
					} else {
						x = oldKey.pos.x + oldKey.size.w + unitKeySize * lx
					}

					if (rowIndex === 0) {
						y = 0
					} else {
						y = oldY + unitKeySize + unitKeySize * ly
					}

					oldKey = {
						pos: {x, y},
						size: {w, h}
					}

					keys.push(<Key keyname={key} x={x} y={y} w={w} h={h} show={status === GameStatuses.SELECTING || aboutToTimeout && currentCharacter === key} highlighted={aboutToTimeout && currentCharacter === key} key={`${rowIndex}-${keyIndex}`} onClick={() => {
						if (status === GameStatuses.PLAYING) {
							setPressedKey(key)
						}
					}}></Key>)

					// reset
					lx = 0;
					lw = 1;
					lh = 1;
				} else {
					if ('x' in key) {
						lx = key['x']
					}

					if ('y' in key) {
						ly = key['y']
					}

					if ('w' in key) {
						lw = key['w']
					}

					if ('h' in key) {
						lh = key['h']
					}
				}

				// if it is the last element of the last row
				// then calculate board size
				if (keyIndex === numCols - 1) {
					if (!oldKey) {
						throw new Error('Old Key is null!!!!')
					}

					keyboardContainerInnerRef.current.style.width = `${oldKey.pos.x + oldKey.size.w}px`
				}
			}

			if (oldKey) {
				oldY = oldKey.pos.y
			}

			if (rowIndex === numRows - 1) {
				if (!oldKey) {
					throw new Error('Old Key is null!!!!')
				}

				keyboardContainerInnerRef.current.style.height = `${oldKey.pos.y + oldKey.size.h}px`
			}
		}

		return keys
	}

	return <div className={style['keyboard-container'] + ' bold-border bold-shadow flex justify-center items-center'}>
		<div className={style['keyboard-container-inner']} ref={keyboardContainerInnerRef}>
			{
				buildKeyboardFromLayout()
			}
		</div>
	</div>
}