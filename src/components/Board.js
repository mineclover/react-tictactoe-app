//rf : 함수형 컴포넌트 관련
//rfce : export default 함수형 컴포넌트 생성
// cce : 클래스 컴포넌트 생성
// rc~ : 클래스 관련

import React, { Component } from 'react';
import Square from './Square';
import './Board.css';

export class Board extends Component {
	constructor(props) {
		super(props);
		this.state = {
			squares: Array(9).fill(null),
		};
	}

	renderSquare(i) {
		return <Square value={this.state.squares[i]} onClick={() => this.handClick(i)} />;
	}

	handClick(i) {
		const newSquares = this.state.squares.slice();
		newSquares[i] = 'X';
		this.setState({ squares: newSquares });
	}

	render() {
		return (
			<div>
				<div className="status">Next player: X</div>
				<div>
					<div className="board-row">
						{/* 본인들을 호출할 수 있다 */}
						{this.renderSquare(1)}
						{this.renderSquare(2)}
						{this.renderSquare(3)}
					</div>
					<div className="board-row">
						{this.renderSquare(4)}
						{this.renderSquare(5)}
						{this.renderSquare(6)}
					</div>
					<div className="board-row">
						{this.renderSquare(7)}
						{this.renderSquare(8)}
						{this.renderSquare(9)}
					</div>
				</div>
			</div>
		);
	}
}

export default Board;
