import './App.scss'

function App() {
  return <div className='game-area'>
	<div className='grid grid-cols-12 gap-4 w-full' style={{ height: '50vh' }}>
		<div className='col-span-3 flex justify-center items-center flex-col'>
			<label className='radio-btn-container'>
				<input type='radio' name="level-radio" defaultChecked></input>
				<div className='radio-div bold-shadow'>Easy</div>
			</label>

			<label className='radio-btn-container'>
				<input type='radio' name="level-radio"></input>
				<div className='radio-div bold-shadow'>Normal</div>
			</label>

			<label className='radio-btn-container'>
				<input type='radio' name="level-radio"></input>
				<div className='radio-div bold-shadow'>Hardcore</div>
			</label>

			<label className='radio-btn-container'>
				<input type='radio' name="level-radio"></input>
				<div className='radio-div bold-shadow'>Seriously?</div>
			</label>
{/*
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
			</button> */}
		</div>
		<div className='col-span-6'>
			<div className='keyboard-selection-panel bold-shadow p-10 grid grid-cols-12 gap-4 w-full'>
				<div className='col-span-4'>
					<label className='radio-btn-container'>
						<input type='radio' name="keyboard-radio" defaultChecked></input>
						<div className='radio-div bold-shadow'>ANSI 104</div>
					</label>
				</div>

				<div className='col-span-4'>
					<label className='radio-btn-container'>
						<input type='radio' name="keyboard-radio"></input>
						<div className='radio-div bold-shadow'>DEFAULT 60%</div>
					</label>
				</div>

				<div className='col-span-4'>
					<label className='radio-btn-container'>
						<input type='radio' name="keyboard-radio"></input>
						<div className='radio-div bold-shadow'>JD40</div>
					</label>
				</div>

				<div className='col-span-4'>
					<label className='radio-btn-container'>
						<input type='radio' name="keyboard-radio"></input>
						<div className='radio-div bold-shadow'>PLANCK</div>
					</label>
				</div>

				<div className='col-span-4'>
					<label className='radio-btn-container'>
						<input type='radio' name="keyboard-radio"></input>
						<div className='radio-div bold-shadow'>Leopold</div>
					</label>
				</div>

				<div className='col-span-4'>
					<label className='radio-btn-container' data-dummy="true">
						<div className='dummy bold-shadow'></div>
					</label>
				</div>
			</div>
		</div>
		<div className='col-span-3'>
			<div className='scoreboard bold-shadow flex justify-around items-center flex-col'>
				<div className='w-9/12'>
					<p className='text-center'>Score</p>
					<p className='text-center text-7xl'>0</p>
				</div>
				<div className='w-9/12 mt-2'>
					<p className='text-center'>Missed</p>
					<p className='text-center text-7xl'>0</p>
				</div>
			</div>
		</div>
	</div>
  </div>
}

export default App
