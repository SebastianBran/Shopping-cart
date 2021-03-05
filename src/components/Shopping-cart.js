import React from 'react'
import './Shopping-cart.css'

function Item(props) {
    return(
        <div className="Item-shopping-cart">
            <div 
                className="Container-image-shopping-cart"
                style={{backgroundImage: `url(${process.env.PUBLIC_URL + props.item.urlImage})`}}
            >
            </div>
            <div className="Container-info-item-shopping-cart">
                <button 
                    className="Delete-item-shopping-cart"    
                    onClick={props.handleClickDeleteItem}
                ></button>
                <div className="Name-item-shopping-cart">{props.item.name}</div>
                <div className="Price-item-shopping-cart">S/ {props.item.price}</div>
                <div className="Amount-item-shopping-cart">{props.item.amount}</div>
            </div>
        </div>
    );
}

class ShoppingCart extends React.Component {
    render() {
        const items = this.props.shoppingCart.items;
        const renderItems = items.map((i, j) => {
            return(
                <Item
                    item={i}
                    key={j}
                    handleClickDeleteItem={() => this.props.handleClickDeleteItemShoppingCart(j)}
                />
            );
        });
        
        let total = 0, cantItems = 0;
        for(let i = 0; i < items.length; i++) {
            total += items[i].price * items[i].amount;
            cantItems += items[i].amount;
        }

        let styles;
        if(this.props.shoppingCart.openShoppingCart) styles = {zIndex: "30"};
        else styles = {zIndex: "0"}

        return(
            <div className="Shopping-cart" style={styles}>
                <div className="Background-shopping-cart-top"></div>
                <div className="Title-shopping-cart">
                    Shopping cart
                    <button
                        className="Return-to-products-shopping-cart"
                        onClick={() => this.props.handleClickReturnToProducts()}
                    >
                    </button>
                </div>
                <div className="Container-shopping-cart">
                    {renderItems}
                </div>
                <div className="Background-shopping-cart-bottom"></div>
                <div className="Purchase-info-shopping-cart">
                    <label>Total:</label><label className="label-total">S/ {total}</label>
                    <label>Items:</label><label className="label-cant-items">{cantItems}</label>
                </div>
            </div>
        );
    }
}

export default ShoppingCart;