import { FETCH_PRODUCTS, FILTER_PRODUCTS_BY_SIZE } from "../actions/types";

const initialState = {items: [], filteredItems: [], size: '' }
export default function(state = initialState, action){
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {...state, items: action.payload, filteredItems: action.payload};
        case FILTER_PRODUCTS_BY_SIZE:
            return {...state, items: action.payload, filteredItems: action.payload, size: action.payload.size};

        default:
            return state;
    } 
}