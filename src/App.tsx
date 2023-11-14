import './App.scss'

function App() {
  return <div className='game-area'>
	<div className='grid grid-cols-12 gap-4 w-full' style={{ height: '50vh' }}>
		<div className='col-span-3 flex justify-center items-center flex-col'>
			<button className='game-btn bold-shadow'>
				Easy
			</button>
			<button className='game-btn bold-shadow'>
				Normal
			</button>
			<button className='game-btn bold-shadow'>
				Hardcore
			</button>
			<button className='game-btn bold-shadow'>
				Are you crazy?
			</button>
		</div>
		<div className='col-span-6'>
			<div className='keyboard-selection-panel bold-shadow'>

			</div>
		</div>
		<div className='col-span-3'>
			<div className='scoreboard bold-shadow flex justify-center items-center flex-col'>
				<div className='w-9/12'>
					<p className='text-left'>Score</p>
					<p className='text-center'>0</p>
				</div>
				<div className='w-9/12 mt-2'>
					<p className='text-left'>Missed</p>
					<p className='text-center'>0</p>
				</div>
			</div>
		</div>
	</div>
  </div>
}

export default App
