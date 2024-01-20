import React, { useEffect, useState } from "react";
import style from './style.module.scss'
import { GameLevels, GameStatuses, Keyboards, useStore } from "../../store";
import { GAME_CONFIGS } from "../../configs/game.config";
import { KEYBOARD_LAYOUTS, KeyboardLayout } from "../../configs/keyboards.config";

export function InGameContent() {
	const { setStatus, level, keyboard, increaseMissed, increaseScore, pressedKey, setPressedKey, setCurrentCharacter, setAboutToTimeout } = useStore();

	const [character, setCharacter] = useState<string>()

	const [keyboardLayout, setKeyboardLayout] = useState<KeyboardLayout>()

	const [duration, setDuration] = useState<number>();

	const [switchCurrentDuration, setSwitchCurrentDuration] = useState<number>();

	const getKeyboardCharacters = () => {
		if (!keyboardLayout) return []

		const characters: string[] = []

		for (const row of keyboardLayout) {
			for (const ele of row) {
				if (typeof ele === 'string') {
					characters.push(ele)
				}
			}
		}

		return characters
	}

	const generateRandomLetterFromKeyboardLayout = () => {
		const characters = getKeyboardCharacters()

		const index = Math.floor(Math.random() * characters.length);

		return characters[index]
	}

	useEffect(() => {
		if (level === GameLevels.EASY) setDuration(GAME_CONFIGS.EASY_DURATION)
		if (level === GameLevels.NORMAL) setDuration(GAME_CONFIGS.NORMAL_DURATION)
		if (level === GameLevels.HARDCORE) setDuration(GAME_CONFIGS.HARDCORE_DURATION)
		if (level === GameLevels.SERIOUS) setDuration(GAME_CONFIGS.SERIOUS_DURATION)
	}, [level])

	useEffect(() => {
		setSwitchCurrentDuration(duration)
	}, [duration])

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

	useEffect(() => {
		if (!keyboardLayout) return

		const character = generateRandomLetterFromKeyboardLayout()

		setCharacter(character)
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [keyboardLayout]);

	useEffect(() => {
		if (!duration || !switchCurrentDuration) return

		const resetTimer = () => {
			const character = generateRandomLetterFromKeyboardLayout()

			setCharacter(character)

			setSwitchCurrentDuration(duration);

			setAboutToTimeout(false)
		}

		const switchTimer = setInterval(() => {
			let timerResetted = false

			// Game logic happens here
			if (pressedKey) {
				// if user already pressed a key

				if (pressedKey === character) {
					increaseScore()
				} else {
					increaseMissed()
				}

				// reset timer
				resetTimer()

				setPressedKey(undefined)

				timerResetted = true
			} else {
				if (switchCurrentDuration <= 0.45) {
					setAboutToTimeout(true)
				}

				if (switchCurrentDuration <= 0) {
					increaseMissed()
				}
			}

			if (switchCurrentDuration <= 0) {
				if (!timerResetted) {
					resetTimer()
				}
			} else {
				setSwitchCurrentDuration(switchCurrentDuration - 0.1)
			}
		}, 100)

		return () => {
			clearInterval(switchTimer)
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [duration, switchCurrentDuration])

	useEffect(() => {
		if (character) {
			setCurrentCharacter(character)
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [character])

	const onStopClicked = () => {
		setStatus(GameStatuses.SELECTING);
	}

	return <div className={style['in-game-container'] + ' w-full h-full'}>
		{
			switchCurrentDuration && duration ? <>
				<div className={style['switch-timer-bar-outer'] + ' w-full h-full'}>
					<div className={style['switch-timer-bar-inner']} style={{ transform: `scaleX(${ switchCurrentDuration / duration })` }}></div>
				</div>
			</> : <></>
		}

		<div className={style['main-container'] + ' flex justify-center items-center flex-col'}>
			<div className={style['top-container'] + ' flex justify-end'}>
			</div>
			<div className={style['middle-container'] + ' flex justify-center items-center'}>
				<span className={style['key'] + ' text-5xl'}>
					{ character }
				</span>
			</div>
			<div className={style['bottom-container'] + ' flex justify-center items-center'}>
				<button className={style['stop-btn'] + ' bold-border'} onClick={onStopClicked}>
					STOP
				</button>
			</div>
		</div>
	</div>
}