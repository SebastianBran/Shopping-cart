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
				itemSelected: null,
				amountOfItem: null
			},
			shoppingCart: {
				items: []
			}
		}
	}

	handleClickItemProducts = (key) => {
		const products = this.state.products;
		products.expandItem = true;
		products.itemSelected = key;
		this.setState({products: products});
	}

	handleClickCloseItemSelect = () => {
		const products = this.state.products;
		products.expandItem = false;
		this.setState({products: products});
	}

	handleClickAddItemSelect = () => {
		if(this.state.products.amountOfItem < 1) return;

		const itemSelected = this.state.products.itemSelected;
		const itemProduct = this.state.products.items[itemSelected];
		const newItemShoppingCart = {
			key: itemSelected,
			name: itemProduct.name,
			price: itemProduct.price,
			amount: this.state.products.amountOfItem
		}

		let pos = -1;
		const shoppingCart = this.state.shoppingCart;
		const itemsShoppingCart = shoppingCart.items;
		
		//find if the element is contained in the array
		for(let i = 0; i < itemsShoppingCart.length; i++) { 
			if(itemsShoppingCart[i].key === itemSelected) {
				pos = i;
				break;
			}
		}
		if(pos >= 0) itemsShoppingCart[pos] = newItemShoppingCart; //update element
		else itemsShoppingCart.push(newItemShoppingCart); //add at the end
		
		shoppingCart.items = itemsShoppingCart;
		this.setState({shoppingCart: shoppingCart});
		this.handleClickCloseItemSelect(); //close item
	}

	onChangeInputNumberItemSelect = (e) => {
		const products = this.state.products;	
		products.amountOfItem = parseInt(e.target.value, 10);
		this.setState({products: products});
	}

	handleClickDeleteItemShoppingCart = (key) => {
		const shoppingCart = this.state.shoppingCart;
		const items = shoppingCart.items;
		items.splice(key, 1);
		shoppingCart.items = items;
		this.setState({shoppingCart: shoppingCart});
	}

	render() {
		const expandItem = this.state.products.expandItem;
		let showExpandItem;
		if(expandItem) {
			const itemSelected = this.state.products.itemSelected;
			const item = this.state.products.items[itemSelected];
			showExpandItem = <ItemSelect item={item} 
				                         handleClickCloseItem={this.handleClickCloseItemSelect} 
										 handleClickAddItem={this.handleClickAddItemSelect}
										 onChangeInputNumber={this.onChangeInputNumberItemSelect}/>;
		}
		else showExpandItem = <div></div>;

		return (
			<div className="App">
				<div className="Board">
					<Products 
						products={this.state.products}
						handleClickItem={this.handleClickItemProducts}
					/>
					<ShoppingCart
						shoppingCart={this.state.shoppingCart}
						handleClickDeleteItemShoppingCart={this.handleClickDeleteItemShoppingCart}
					/>
				</div>
				{showExpandItem}
			</div>
		);
	}
}

export default App;