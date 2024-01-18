import './App.scss'
import { KeyboardSelecting } from './components/keyboard-selecting'
import { LevelSelecting } from './components/level-selecting'
import { Scoreboard } from './components/scoreboard'

function App() {
  return <div className='game-area'>
	<div className='grid grid-cols-12 gap-4 w-full' style={{ height: '50vh' }}>
		<div className='col-span-3'>
			<LevelSelecting></LevelSelecting>
		</div>
		<div className='col-span-6'>
			<div className='middle-panel bold-shadow w-full'>
				<KeyboardSelecting></KeyboardSelecting>

				<div className='play w-full flex justify-center items-center'>
					<div className='arrow'></div>
					<button className='play-btn bold-shadow bold-border'>
						GO!
					</button>
				</div>
			</div>
		</div>
		<div className='col-span-3'>
			<Scoreboard></Scoreboard>
		</div>
	</div>
  </div>
}

export default App
