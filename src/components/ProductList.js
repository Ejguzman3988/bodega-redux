import React, { Component } from 'react'
import {connect} from "react-redux"
import Product from './Product'

class ProductList extends Component {
    render() {
        const products = this.props.products.map(p => <Product product={p} />)
        return (
            <div>
                {products}
            </div>
        )
    }
}

const mapStateToProps = (stateFromStore) => {
    return{
        products: stateFromStore.products
    }
}
// connect() -> function(). conect(mapStateToProps, mapDispatchToProps)(component)
export default connect(mapStateToProps)(ProductList)
