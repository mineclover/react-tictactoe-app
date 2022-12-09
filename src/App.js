import React from 'react';
import './App.css';
import Board from './components/Board';

export class App extends React.Component {
	render() {
		return (
			<div className="game">
				{/*game board */}
				<div className="game-board">{<Board />}</div>
				{/*game info */}
				<div className="game-info">game-info</div>
				{/* status */}
				<div>status</div>
				{/* TODO */}
				<ol>TODO</ol>
			</div>
		);
	}
}

export default App;
