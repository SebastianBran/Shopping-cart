import React from 'react'
import './Item-select.css'

class ItemSelect extends React.Component {
    render() {
        return(
            <div className="Item-select-bg">
                <div className="Item-select-container">
                    <div className="Item-select-img"></div>
                    <div className="Item-select-info">
                        <div className="Item-info">
                            <button 
                                className="Close-item-select"
                                onClick={() => this.props.handleClickCloseItem()}
                            >
                            </button>
                            <div className="Name-item-select">{this.props.item.name}</div>
                            <div className="Price-item-select">S/ {this.props.item.price}</div>
                            <input 
                                type="number" 
                                className="Amount-item-select" 
                                min="1" 
                                max="100"
                                onChange={this.props.onChangeInputNumber}
                            >    
                            </input>
                        </div>
                        <button 
                            className="Add-button"
                            onClick={() => this.props.handleClickAddItem()}
                        >Add</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemSelect;
