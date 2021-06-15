

export const addProduct = (productObj) => {
    return{
        type: "ADD_PRODUCT",
        payload: productObj
    }
}

export const updateProduct = (newProduct) =>{
    return{
        type: "UPDATE_PRODUCT",
        payload: newProduct
    }
}