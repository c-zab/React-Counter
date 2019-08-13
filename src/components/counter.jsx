import React, { Component } from 'react';

class Counter extends Component {

	componentDidUpdate(prevProps, prevState) {
		console.log("prevProps", prevProps)
		console.log("prevState", prevState)
	}

	componentWillUnmount(){
		console.log('Counter - Will Unmount');
	}

	render() {
		console.log('Counter - Rendered');

		return(
			<div className='ui grid compact'>
				<div className="row">
					<div className="column">
						<h1 className={this.getBadgeClasses()}>{ this.formatCount() }</h1>
					</div>
				</div>
				<div className="five column row">
					<div className="column">
						<button
							className='ui primary button'
							onClick={ () => this.props.onIncrement(this.props.counter) }>
								Increment
						</button>
					</div>
					<div className="column">
						<button
							className='ui negative button'
							onClick={ () => this.props.onDelete(this.props.counter.id) }>
								Delete
						</button>
					</div>
				</div>
				<div className="ui divider"></div>
			</div>
		);
	}

	getBadgeClasses() {
		let classes = "ui label ";
		classes += this.props.counter.value === 0 ? 'red' : 'teal';
		return classes;
	}

	formatCount(){
		const { value } = this.props.counter;
		return value === 0 ? 'Zero' : value
	}
}

export default Counter;
