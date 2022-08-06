// App.js
import React, { Component } from 'react';
import uniqid from 'uniqid';
import Overview from './components/Overview';

class App extends Component {
	constructor() {
		super();

		this.state = {
			task: {
				text: '',
				id: uniqid(),
			},
			tasks: [],
		};
	}

	handleChange = (e) => {
		console.log('value: ', e.target.value);
		this.setState({
			task: {
				text: e.target.value,
				id: this.state.task.id,
			},
		});
	};

	onSubmitTask = (e) => {
		e.preventDefault();
		this.setState({
			tasks: this.state.tasks.concat(this.state.task),
			task: {
				text: '',
				id: uniqid(),
			},
		});
	};

	render() {
		const { task, tasks } = this.state;

		return (
			<div>
				<form onSubmit={this.onSubmitTask}>
          <Overview tasks={tasks} />
					<label htmlFor='taskInput'>Enter task</label>
					<input
						onChange={this.handleChange}
						value={task.text}
						type='text'
						id='taskInput'
					/>
					;<button type='submit'>Add Task</button>
				</form>
			</div>
		);
	}
}

export default App;

// App.js
// // import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div>Hello World</div>
//   );
// }

// export default App;
