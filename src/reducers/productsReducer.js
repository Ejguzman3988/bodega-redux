const initialState = {
    products: [],
    loading: false,
}


const productsReducer = (state = initialState, action) => {
    switch(action.type){
        case "LOADING":
            return {
                ...state,
                loading: true
            }

        case "ADD_PRODUCT":
            // return state.concat(action.payload)
            return {
                ...state,
                products: [...state.products, action.payload]
            }
        case "GET_PRODUCTS":

            return{
                ...state,
                products: [...state.products, ...action.payload],
                loading: false
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