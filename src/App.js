import './App.css';
import React from 'react'
import Products from './components/Products'
import ShoppingCart from './components/Shopping-cart'

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<div className="Board">
					<Products/>
					<ShoppingCart/>
				</div>
			</div>
		);
	}
}

export default App;
