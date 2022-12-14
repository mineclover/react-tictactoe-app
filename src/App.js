import React, { useState } from 'react';
import './App.css';
import Board from './components/Board';
const App = () => {
	// 저장하는 값
	const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
	const [xIsNext, setXIsNext] = useState(true);
	const [stepNumber, setStepNumber] = useState(0);
	const current = history[stepNumber];
	const winner = calculateWinner(current.squares);

	const jumpTo = move => {
		setStepNumber(move);
		setXIsNext(move % 2 === 0);
		// square 를 수정해서 다시 그려야함
	};

	// 1 먼저 실행되고 자주 실행되는 함수
	const moves = history.map((step, move) => {
		const desc = move ? 'Go to move #' + move : 'Go to game start';
		return (
			<li key={move}>
				<button onClick={() => jumpTo(move)}>{desc}</button>
			</li>
		);
	});

	let status;
	if (winner) {
		status = 'Winner: ' + winner;
	} else {
		status = `Next player: ${xIsNext ? 'X' : 'O'}`;
	}
	const handleClick = i => {
		// slice 가 마지막 커서를 포함하지 않아서 + 1
		const newHistory = history.slice(0, stepNumber + 1);
		const newCurrent = newHistory[newHistory.length - 1];

		const newSquares = newCurrent.squares.slice();
		if (calculateWinner(newSquares) || newSquares[i]) {
			return;
		}
		newSquares[i] = xIsNext ? 'X' : 'O';
		// 기존 셋 히스토리 방식은 기존 데이터에서 추가되는 거였는데
		// 새로운 데이터를 만들어서( 뒤로 계속 가는 방식 ) 넣어주는 방식으로 변경
		setHistory([...newHistory, { squares: newSquares }]);
		setXIsNext(previousValue => !previousValue);

		// 변경됬을 때 히스토리가 이전 값을 가리칠 수 있도록
		setStepNumber(newHistory.length);
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
				return squares[a];
			}
		}
		return null;
	}
	return (
		<div className="game">
			{/* game-board */}
			<div className="game-board">
				<Board squares={current.squares} onClick={i => handleClick(i)} />
			</div>
			{/* game-info */}
			<div className="game-info">
				{/* status */}
				<div className="status">{status}</div>
				{/* 작업 내역을 추가함 */}
				<ol>{moves}</ol>
			</div>
		</div>
	);
};
export default App;
