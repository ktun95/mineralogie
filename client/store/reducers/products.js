import axios from 'axios'


//ACTION TYPES
const GET_PRODUCTS = 'GET_PRODUCTS'
// const VIEW_SINGLE_PRODUCT = 'VIEW_SINGLE_PRODUCT'

//ACTION CREATORS
const getProducts = products => ({type: GET_PRODUCTS, products})
// export const viewSingleProduct = product => ({type: VIEW_SINGLE_PRODUCT, product})

//THUNK CREATORS
export const fetchProducts = () => async dispatch => {
    try {
        const {data} = await axios.get('/api/products/minerals')
        if (typeof data !== 'object') throw new Error('resource not found')//maybe this line of code shouild live in the corresponding api route instead
        dispatch(getProducts(data))
    } catch (err) {
        console.error(err)
    }
}

//reducer
const initialState = {
    products: []
}

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS:
            return {...state, products: [...action.products]}
        // case VIEW_SINGLE_PRODUCT:
        //     return {...state, viewProduct: action.product }
        default:
            return state
    }
}


