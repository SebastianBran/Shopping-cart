import React from 'react'
import './Shopping-cart.css'

function Item(props) {
    return(
        <div className="Item-shopping-cart">
            <div className="Container-image-shopping-cart"></div>
            <div className="Container-info-item-shopping-cart">
                <button 
                    className="Delete-item-shopping-cart"    
                    onClick={props.handleClickDeleteItem}
                ></button>
                <div className="Name-item-shopping-cart">{props.name}</div>
                <div className="Price-item-shopping-cart">S/ {props.price}</div>
                <div className="Amount-item-shopping-cart">{props.amount}</div>
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
                    name={i.name}
                    price={i.price}
                    amount={i.amount}
                    key={j}
                    handleClickDeleteItem={() => this.props.handleClickDeleteItemShoppingCart(j)}
                />
            );
        });
        
        let total = 0, cantItems = 0;
        for(let i = 0; i < items.length; i++) {
            total += items[i].price;
            cantItems += items[i].amount;
        }

        return(
            <div className="Shopping-cart">
                <div className="Background-shopping-cart-top"></div>
                <div className="Title-shopping-cart">Shopping cart</div>
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