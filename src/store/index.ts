import { create } from "zustand";
import { devtools, persist } from 'zustand/middleware'

export enum GameLevel {
	EASY,
	NORMAL,
	HARDCORE,
	SERIOUS
}

export enum Keyboard {
	ANSI104,
	DEFAULT60,
	JD40,
	PLANCK,
	LEOPOLD,
}

export enum GameStatus {
	SELECTING,
	PLAYING,
}

export interface GameState {
	status: GameStatus,
	level: GameLevel,
	keyboard: Keyboard,
	score: number,
	missed: number,

	setLevel: (level: GameLevel) => void,
	setKeyboard: (keyboard: Keyboard) => void,
	setStatus: (status: GameStatus) => void,
	increaseScore: () => void,
	increaseMissed: () => void,
	resetNumbers: () => void,
}

export const useStore = create<GameState>()(
	devtools(
		persist(
			(set) => ({
				status: GameStatus.SELECTING,
				level: GameLevel.NORMAL,
				keyboard: Keyboard.ANSI104,
				score: 0,
				missed: 0,

				setLevel: (level: GameLevel) => set(() => ({
					level
				})),
				setKeyboard: (keyboard: Keyboard) => set(() => ({
					keyboard
				})),
				setStatus: (status: GameStatus) => set(() => ({
					status
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
				name: 'gameStates'
			}
		)
	)
)