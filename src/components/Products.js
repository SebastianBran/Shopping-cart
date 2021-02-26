import React from 'react'
import './Products.css'

function Item(props) {
    return(
        <div className="Item">
            <div className="Container-image-item"></div>
            <div className="Name-item">{props.name}</div>
            <div className="Price-item">S/ {props.price}</div>
        </div>
    );
}

class Products extends React.Component {
    render() {
        return(
            <div className="Container-products">
                <div className="Background-products"></div>
                <div className="Title-products">Products</div>
                <div className="Container-items">
                    <Item 
                        name="Product X"
                        price="9999"
                    />
                    <Item 
                        name="Product X"
                        price="9999"
                    />
                    <Item 
                        name="Product X"
                        price="9999"
                    />
                    <Item 
                        name="Product X"
                        price="9999"
                    />
                    <Item 
                        name="Product X"
                        price="9999"
                    />
                    <Item 
                        name="Product X"
                        price="9999"
                    />
                    <Item 
                        name="Product X"
                        price="9999"
                    />
                    <Item 
                        name="Product X"
                        price="9999"
                    />
                     <Item 
                        name="Product X"
                        price="9999"
                    />
                    <Item 
                        name="Product X"
                        price="9999"
                    />
                    <Item 
                        name="Product X"
                        price="9999"
                    />
                    <Item 
                        name="Product X"
                        price="9999"
                    />
                    <Item 
                        name="Product X"
                        price="9999"
                    />
                    <Item 
                        name="Product X"
                        price="9999"
                    />
                    <Item 
                        name="Product X"
                        price="9999"
                    />
                    <Item 
                        name="Product X"
                        price="9999"
                    />
                    <Item 
                        name="Product X"
                        price="9999"
                    />
                    <Item 
                        name="Product X"
                        price="9999"
                    />
                </div>
            </div>
        );
    }
}

export default Products;