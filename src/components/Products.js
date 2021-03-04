import React from 'react'
import './Products.css'

function Item(props) {
    return(
        <div className="Item-products" onClick={props.handleClickItem}>
            <div 
                className="Container-image-item-products" 
                style={{backgroundImage: `url(${process.env.PUBLIC_URL + props.item.urlImage})`}}
            >
            </div>
            <div className="Name-item-products">{props.item.name}</div>
            <div className="Price-item-products">S/ {props.item.price}</div>
        </div>
    );
}

class Products extends React.Component {
    render() {
        const items = this.props.products.items;
        const renderItems = items.map((i, j) => {
            return(
                <Item
                    item={i}
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