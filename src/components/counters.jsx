import React, { Component } from 'react';
import Counter from './Counter';

class Counters extends Component {
	render() {
		const { onReset, onDelete, onIncrement, counters } = this.props;
		return (
			<React.Fragment>
				<div className="ui grid">
					<div className="row">
						<div className="column">
							<button
								className="ui inverted red button"
								onClick={ onReset }>Reset
							</button>
						</div>
					</div>
				</div>
				{ counters.map(counter =>
					<Counter
						key={ counter.id }
						onDelete={ onDelete }
						onIncrement={ onIncrement }
						counter= { counter } >
					</Counter>
				) }
			</React.Fragment>
		);
	}
}

export default Counters;
