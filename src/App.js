import React, { Component } from 'react';
import Navbar from './components/navbar'
import Counters from './components/counters';

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

		return (
			<React.Fragment>
				<Navbar
					totalProducts= {this.state.counters.filter(c => c.value > 0).length}
					total={ this.getTotal() }/>
				<Counters
					counters= {this.state.counters}
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
