//rf : 함수형 컴포넌트 관련
//rfce : export default 함수형 컴포넌트 생성
// cce : 클래스 컴포넌트 생성
// rc~ : 클래스 관련

import { useState } from 'react';
import Square from './Square';
import './Board.css';

const Board = () => {
	const renderSquare = i => {
		return <Square value={squares[i]} onClick={() => handClick(i)} />;
	};

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
