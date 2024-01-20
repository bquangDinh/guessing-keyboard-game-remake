import React, { useEffect, useState } from "react";
import style from './style.module.scss'
import { GameLevels, GameStatuses, useStore } from "../../store";
import { GAME_CONFIGS } from "../../configs/game.config";

export function InGameContent() {
	const { setStatus, level } = useStore();

	const [duration, setDuration] = useState(GAME_CONFIGS.EASY_DURATION);

	const [switchCurrentDuration, setSwitchCurrentDuration] = useState(duration);

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
		const switchTimer = setInterval(() => {
			if (switchCurrentDuration - 0.1 <= 0) {
				setSwitchCurrentDuration(duration);
			} else {
				setSwitchCurrentDuration(switchCurrentDuration - 0.1)
			}
		}, 100)

		return () => {
			clearInterval(switchTimer)
		}
	});

	const onStopClicked = () => {
		setStatus(GameStatuses.SELECTING);
	}

	return <div className={style['in-game-container'] + ' w-full h-full'}>
		<div className={style['switch-timer-bar-outer'] + ' w-full h-full'}>
			<div className={style['switch-timer-bar-inner']} style={{ transform: `scaleX(${ switchCurrentDuration / duration })` }}></div>
		</div>

		<div className={style['main-container'] + ' flex justify-center items-center flex-col'}>
			<div className={style['top-container'] + ' flex justify-end'}>
			</div>
			<div className={style['middle-container'] + ' flex justify-center items-center'}>
				<span className={style['key'] + ' text-5xl'}>
					ENTER
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