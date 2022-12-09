import React, { Component } from 'react';
import './Square.css';

export class Square extends Component {
	event = () => {
		this.props.onClick();
	};

	render() {
		return (
			<button className="square" onClick={this.event}>
				{this.props.value}
			</button>
		);
	}
}

export default Square;
