import { PRODUCTS_FAIL, PRODUCTS_REQUEST, PRODUCTS_SUCCESS } from '../Constants/ProductsConstants';

const intialState = {
    products: []
}

export const productsReducer = (state = intialState, action) => {
    switch (action.type) {
        case PRODUCTS_REQUEST:
            return { loading: true, products: [] }

        case PRODUCTS_SUCCESS:
            return { loading: false, products: action.payload }

        case PRODUCTS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}