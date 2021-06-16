

export const addProduct = (productObj) => {
    return{
        type: "ADD_PRODUCT",
        payload: productObj
    }
}


//  product = { name: "PEPSI", quantity: 1}
// {product: product} === {product}
export const createProduct = (product) => {
    
    return (dispatch) => {
        fetch("/products", {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify({product}),
        })
            .then(resp => resp.json())
            .then(product => {
                dispatch(addProduct(product))
            })
    }
}


export const updateProduct = (newProduct) =>{
    return{
        type: "UPDATE_PRODUCT",
        payload: newProduct
    }
}

// Thunk is middle ware
// that allows us to in our action access dispatch
// lets our action return a function
// this lets use redux async

export const getProducts = () => {
      return (dispatch) => {
            dispatch({type: "LOADING"})
        
            fetch("/products")
                  .then(resp => resp.json())
                  .then(products =>{
                      dispatch({
                          type: "GET_PRODUCTS",
                          payload: products
                      })
                  } )
                }

}