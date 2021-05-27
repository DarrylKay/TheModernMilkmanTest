import { PRODUCTS_FAIL, PRODUCTS_REQUEST, PRODUCTS_SUCCESS } from '../Constants/ProductsConstants';
import axios from 'axios';

export const getProducts = () => (dispatch) => {
    try {
        dispatch({ type: PRODUCTS_REQUEST });

        axios.get('https://developertests.z33.web.core.windows.net/ReactTestData.json')
            .then(({ data }) => {
                dispatch({ type: PRODUCTS_SUCCESS, payload: data });
            });

    } catch (error) {
        dispatch({ type: PRODUCTS_FAIL, payload: error })
    }
}