import { useState } from 'react';
import './App.css';
import Board from './components/Board';

const App = () => {
	const [history, setHistory] = useState({ squares: Array(9).fill(null) });
	const [xIsNExt, setXIsNExt] = useState(true);
	const current = history[history - 1];

	const winner = calculateWinner(current.squares);

	let status;
	if (winner) {
		status = 'Winner: ' + winner;
	} else {
		status = 'Next player: ' + (xIsNExt ? 'X' : 'O');
	}

	const handClick = i => {
		const newSquares = current.squares.slice();
		if (calculateWinner(newSquares) || newSquares[i]) {
			return;
		}
		newSquares[i] = xIsNExt ? 'X' : 'O';

		setHistory([...history, { squares: newSquares }]);
		//setXIsNExt(!xIsNExt);
		setXIsNExt(prev => !prev); // 이게 여러번 실행됬을 때 누락 없이 동작이 가능한 코드
	};

	function calculateWinner(squares) {
		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];
		for (let i = 0; i < lines.length; i++) {
			const [a, b, c] = lines[i];
			if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
				console.log('squares[a]', squares[a]);
				return squares[a];
			}
		}
	}

	return (
		<div className="game">
			{/*game board */}
			<div className="game-board">
				<Board onClick={haanleClick(i)} />
			</div>
			{/*game info */}
			<div className="game-info">game-info</div>
			{/* status */}
			<div>status</div>
			{/* TODO */}
			<ol>TODO</ol>
		</div>
	);
};

export default App;
