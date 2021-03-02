import './App.css';
import React from 'react'
import Products from './components/Products'
import ShoppingCart from './components/Shopping-cart'
import ItemSelect from './components/Item-select'

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			products: {
				items: [
					{name: "Product X", price: 9999},
					{name: "Product X", price: 9999},
					{name: "Product X", price: 9999},
					{name: "Product X", price: 9999},
					{name: "Product X", price: 9999},
					{name: "Product X", price: 9999},
					{name: "Product X", price: 9999},
					{name: "Product 4", price: 100},
					{name: "Product X", price: 9999},
					{name: "Product X", price: 9999}
				],
				expandItem: false,
				itemSelected: null
			}
		}
	}

	handleClickItem = (j) => {
		const products = this.state.products;
		products.expandItem = true;
		products.itemSelected = j;
		this.setState({products: products});
	}

	handleClickCloseItem = () => {
		const products = this.state.products;
		products.expandItem = false;
		this.setState({products: products});
	}

	render() {
		const expandItem = this.state.products.expandItem;
		let showExpandItem;
		if(expandItem) {
			const itemSelected = this.state.products.itemSelected;
			const item = this.state.products.items[itemSelected];
			showExpandItem = <ItemSelect item={item} handleClickCloseItem={this.handleClickCloseItem}/>;
		}
		else showExpandItem = <div></div>;

		return (
			<div className="App">
				<div className="Board">
					<Products 
						products={this.state.products}
						handleClickItem={this.handleClickItem}
					/>
					<ShoppingCart/>
				</div>
				{showExpandItem}
			</div>
		);
	}
}

export default App;
