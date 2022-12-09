//rf : 함수형 컴포넌트 관련
//rfce : export default 함수형 컴포넌트 생성
// cce : 클래스 컴포넌트 생성
// rc~ : 클래스 관련

import { useState } from 'react';
import Square from './Square';
import './Board.css';

const Board = () => {
	const [squares, setSquares] = useState(Array(9).fill(null));
	const [xIsNExt, setXIsNExt] = useState(true);
	const winner = calculateWinner(squares);
	let status;
	if (winner) {
		status = 'Winner: ' + winner;
	} else {
		status = 'Next player: ' + (xIsNExt ? 'X' : 'O');
	}

	const handClick = i => {
		const newSquares = squares.slice();
		if (calculateWinner(newSquares) || newSquares[i]) {
			return;
		}
		newSquares[i] = xIsNExt ? 'X' : 'O';

		setSquares(newSquares);
		//setXIsNExt(!xIsNExt);
		setXIsNExt(prev => !prev); // 이게 여러번 실행됬을 때 누락 없이 동작이 가능한 코드
	};

	const renderSquare = i => {
		return <Square value={squares[i]} onClick={() => handClick(i)} />;
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
		<div>
			<div className="status">{status}</div>
			<div>
				<div className="board-row">
					{/* 본인들을 호출할 수 있다 */}
					{renderSquare(1)}
					{renderSquare(2)}
					{renderSquare(3)}
				</div>
				<div className="board-row">
					{renderSquare(4)}
					{renderSquare(5)}
					{renderSquare(6)}
				</div>
				<div className="board-row">
					{renderSquare(7)}
					{renderSquare(8)}
					{renderSquare(9)}
				</div>
			</div>
		</div>
	);
};

export default Board;
