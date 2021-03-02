import React from 'react'
import './Products.css'

function Item(props) {
    return(
        <div className="Item-products" onClick={props.handleClickItem}>
            <div className="Container-image-item-products"></div>
            <div className="Name-item-products">{props.name}</div>
            <div className="Price-item-products">S/ {props.price}</div>
        </div>
    );
}

class Products extends React.Component {
    render() {
        const items = this.props.products.items;
        const renderItems = items.map((i, j) => {
            return(
                <Item
                    name={i.name}
                    price={i.price}
                    key={j}
                    handleClickItem={() => this.props.handleClickItem(j)}
                />
            );
        });

        return(
            <div className="Container-products">
                <div className="Background-products"></div>
                <div className="Title-products">Products</div>
                <div className="Container-items-products">
                    {renderItems}
                </div>
            </div>
        );
    }
}

export default Products;