import './App.scss'
import { InGameContent } from './components/in-game-content'
import { Keyboard } from './components/keyboard'
import { KeyboardSelecting } from './components/keyboard-selecting'
import { LevelSelecting } from './components/level-selecting'
import { Scoreboard } from './components/scoreboard'
import { GameStatuses, useStore } from './store'

function App() {
	const { status, resetNumbers, setStatus } = useStore()

	const onPlayClicked = () => {
		resetNumbers();
		setStatus(GameStatuses.PLAYING);
	}

	return <div className='main-container'>
		<div className='top-line bold-border bold-shadow'></div>
		<div className='bottom-line bold-border bold-shadow'></div>

		<div className='game-area'>
			<div className='control-panel grid grid-cols-12 gap-4 w-full'>
				<div className='col-span-3'>
					<LevelSelecting></LevelSelecting>
				</div>
				<div className='col-span-6'>
					<div className='middle-panel upper-half-container bold-shadow w-full'>
						{
							status === GameStatuses.SELECTING ? <>
								<KeyboardSelecting></KeyboardSelecting>

								<div className='play w-full flex justify-center items-center'>
									<div className='arrow'></div>
									<button className='play-btn bold-shadow bold-border' onClick={onPlayClicked}>
										GO!
									</button>
								</div>
							</> : <>
								<InGameContent></InGameContent>
							</>
						}
					</div>
				</div>
				<div className='col-span-3'>
					<Scoreboard></Scoreboard>
				</div>
			</div>
			<div className='keyboard-panel flex justify-center items-center'>
				<Keyboard></Keyboard>

				<div className='left-div bold-shadow bold-border'>
					<a href="https://qdinh.me/jupiter/<%- PROJECT_ID %>" target="_blank" rel="noopener noreferrer">Quang Dinh Bui</a>
				</div>
			</div>
		</div>
	</div>
}

export default App
