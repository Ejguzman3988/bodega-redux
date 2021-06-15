const initialState = {
    products: [],

}


const productsReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_PRODUCT":
            // return state.concat(action.payload)
            return {
                ...state,
                products: [...state.products, action.payload]
            }

        case "UPDATE_PRODUCT":
            return {}

        case "FEED_CAT":
            //LOGIC     
            return {}

        default: 
            return state
    }
}


export default productsReducer