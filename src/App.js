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
					{name: "Acer nitro 5", price: 3200, urlImage: '/images/acer-nitro-5.png'},
					{name: "Air dots", price: 70, urlImage: '/images/air-dots-xiaomi.png'},
					{name: "Apple watch", price: 1300, urlImage: '/images/apple-watch.png'},
					{name: "Ipad pro", price: 4200, urlImage: '/images/ipad-pro-2020.png'},
					{name: "Iphone 11 pro max", price: 4800, urlImage: '/images/iphone-11-pro-max.png'},
					{name: "Macbook pro", price: 8000, urlImage: '/images/macbook-pro-2020.png'},
					{name: "Mi band 4", price: 100, urlImage: '/images/mi-band-4.png'},
					{name: "Monitor", price: 600, urlImage: '/images/monitor-samsung.png'},
					{name: "Mouse logitech g203", price: 120, urlImage: '/images/mouse-logitech-g203.png'},
					{name: "Samsung s7 edge", price: 950, urlImage: '/images/samsung-s7-edge.png'},
					{name: "Keyboard Antryx tkl", price: 200, urlImage: '/images/keyboard-antryx-tkl.png'},
					{name: "Xiaomi redmi note 9", price: 850, urlImage: '/images/xiaomi-redmi-note-9.png'},
					{name: "Airpods", price: 600, urlImage: '/images/airpods.png'},
					{name: "Logitech g432", price: 230, urlImage: '/images/logitech-g432.png'},
					{name: "JBL go 2", price: 110, urlImage: '/images/jbl-go-2.png'},
					{name: "Playstation 5", price: 2500, urlImage: '/images/playstation-5.png'}
				],
				expandItem: false,
				itemSelected: null,
				amountOfItem: null
			},
			shoppingCart: {
				items: [],
				openShoppingCart: false,
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
			amount: this.state.products.amountOfItem,
			urlImage: itemProduct.urlImage
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
	
	handleClickDeleteItemShoppingCart = (key) => {
		const shoppingCart = this.state.shoppingCart;
		const items = shoppingCart.items;
		items.splice(key, 1);
		shoppingCart.items = items;
		this.setState({shoppingCart: shoppingCart});
	}

	handleClickOpenShoppingCart = () => { //open the shopping cart
		const shoppingCart = this.state.shoppingCart;
		let openShoppingCart = shoppingCart.openShoppingCart;
		openShoppingCart = true;
		shoppingCart.openShoppingCart = openShoppingCart;
		this.setState({shoppingCart: shoppingCart});
	}

	handleClickReturnToProducts = () => { //return to products
		const shoppingCart = this.state.shoppingCart;
		let openShoppingCart = shoppingCart.openShoppingCart;
		openShoppingCart = false;
		shoppingCart.openShoppingCart = openShoppingCart;
		this.setState({shoppingCart: shoppingCart});
	}

	onChangeInputNumberItemSelect = (e) => {
		const products = this.state.products;	
		products.amountOfItem = parseInt(e.target.value, 10);
		this.setState({products: products});
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
						handleClickOpenShoppingCart={this.handleClickOpenShoppingCart}
						openShoppingCart={this.state.shoppingCart.openShoppingCart}
					/>
					<ShoppingCart
						shoppingCart={this.state.shoppingCart}
						handleClickDeleteItemShoppingCart={this.handleClickDeleteItemShoppingCart}
						handleClickReturnToProducts={this.handleClickReturnToProducts}
					/>
				</div>
				{showExpandItem}
			</div>
		);
	}
}

export default App;