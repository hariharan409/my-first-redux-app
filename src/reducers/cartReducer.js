import { ADD_ITEM, DELETE_ITEM } from "../action-types/actionTypes";


const initialState = {
    numOfItems: 0
};

export const cartReducer = (state = initialState,action) => {
    /* types of actions in cardReducer */
    switch(action.type) {
        case ADD_ITEM: 
        return {
            ...state,
            numOfItems: state.numOfItems + 1
        };
        case DELETE_ITEM: 
        return {
            ...state,
            numOfItems: state.numOfItems <= 0 ? 0 : state.numOfItems - 1
        }
        default: 
        return state;
    }
}