import React, { Component } from 'react';
import Navbar from './components/Navbar'
import Counters from './components/Counters';

class App extends Component {
	state = {
		counters: [
			{id: 1, value: 10},
			{id: 2, value: 3},
			{id: 3, value: 1}
		]
	}

	handleIncrement = counter => {
		const counters = [...this.state.counters];
		const index = counters.indexOf(counter);
		counters[index] = counter;
		counters[index].value++;
		this.setState({ counters })
	}

	handleDelete = counterId => {
		const counters = this.state.counters.filter(c => c.id !== counterId)
		this.setState({ counters })
	}

	handleReset = () => {
		const counters = this.state.counters.map(c => {
			c.value = 0;
			return c;
		})
		this.setState({ counters })
	}

	render() {
    const {counters} = this.state;
		return (
			<React.Fragment>
				<Navbar
					totalProducts={ counters.filter(c => c.value > 0).length }
					total={ this.getTotal() }/>
				<Counters
					counters={counters}
					onIncrement={this.handleIncrement}
					onDelete={this.handleDelete}
					onReset={this.handleReset}>
				</Counters>
			</React.Fragment>
		 );
	}

	getTotal(){
		let total = this.state.counters.reduce((a, b) => {
			return { value: a.value + b.value }
		})
		return total.value
	}
}

export default App;
