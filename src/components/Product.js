import React, { Component } from 'react'

export class Product extends Component {
    render() {
        const { name, quantity} = this.props.product //{name: "cat food", quantity: 3}
        return (
            <div id="product">
                <h3>{name}</h3>
                <p>Quantity: {quantity}</p>
            </div>
        )
    }
}

export default Product
