import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addProduct} from "../actions/product"

class ProductForm extends Component {
    
    state={
        name: "",
        quantity: 0
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // WE WANT TO TAKE THE OBJECT THAT WE ARE SUBMITTING 
        // AND PASS IT TO THE REDUCER
        this.props.addProduct(this.state)
    }
    
    render() {
        return (
            <div id="product-form">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="name">Name: </label>
                        <input id="name" name="name" value={this.state.name} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label htmlFor="quantity">Quantity: </label>
                        <input id="quantity" name="quantity" type="number" onChange={this.handleChange} value={this.state.quantity} />
                    </div>
                    <div>
                        <input type="submit" value="ADD A PRODUCT" />
                    </div>
                </form>
            </div>
        )
    }
}

// const MDTP = (dispatch) => {
//     return{
//         addProduct: (product) => dispatch(addProduct(product))
//     }

// }


// connect() -> returns a function. We can then invoke again and pass in our component
export default connect(null, { addProduct })(ProductForm)   
