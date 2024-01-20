import { create } from "zustand";
import { devtools, persist } from 'zustand/middleware'

export enum GameLevels {
	EASY,
	NORMAL,
	HARDCORE,
	SERIOUS
}

export enum Keyboards {
	ANSI104,
	DEFAULT60,
	JD40,
	PLANCK,
	LEOPOLD,
}

export enum GameStatuses {
	SELECTING,
	PLAYING,
}

export interface GameStates {
	status: GameStatuses,
	level: GameLevels,
	keyboard: Keyboards,
	score: number,
	missed: number,
	currentCharacter: string,
	pressedKey: string | undefined,
	aboutToTimeout: boolean,

	setLevel: (level: GameLevels) => void,
	setKeyboard: (keyboard: Keyboards) => void,
	setStatus: (status: GameStatuses) => void,
	setCurrentCharacter: (character: string) => void,
	setAboutToTimeout: (val: boolean) => void,
	setPressedKey: (key: string | undefined) => void,
	increaseScore: () => void,
	increaseMissed: () => void,
	resetNumbers: () => void,
}

export const useStore = create<GameStates>()(
	devtools(
		persist(
			(set) => ({
				status: GameStatuses.SELECTING,
				level: GameLevels.NORMAL,
				keyboard: Keyboards.ANSI104,
				currentCharacter: '',
				pressedKey: undefined,
				score: 0,
				missed: 0,
				aboutToTimeout: false,

				setLevel: (level: GameLevels) => set(() => ({
					level
				})),
				setKeyboard: (keyboard: Keyboards) => set(() => ({
					keyboard
				})),
				setStatus: (status: GameStatuses) => set(() => ({
					status
				})),
				setCurrentCharacter: (character: string) => set(() => ({
					currentCharacter: character,
				})),
				setPressedKey: (key: string | undefined) => set(() => ({
					pressedKey: key
				})),
				setAboutToTimeout: (val: boolean) => set(() => ({
					aboutToTimeout: val
				})),
				increaseScore: () => set((state) => ({
					score: state.score + 1
				})),
				increaseMissed: () => set((state) => ({
					missed: state.missed + 1
				})),
				resetNumbers: () => set(() => ({
					score: 0,
					missed: 0
				}))
			}),
			{
				name: 'gameStates',
				partialize: (state) => ({
					level: state.level,
					keyboard: state.keyboard
				})
			}
		)
	)
)