

import * as ACTION_TYPES from './Action_Types/CartActionTypes';

export const addToCart = (id) => {
    return {
        type: ACTION_TYPES.ADD_TO_CART,
        id
    }
}

export const removeItem = (id) => {
    return {
        type: ACTION_TYPES.REMOVE_ITEM,
        id
    }
}

export const subtractQuantity = (id) => {
    return {
        type: ACTION_TYPES.SUB_QUANTITY,
        id
    }
}

export const addQuantity = (id) => {
    return {
        type: ACTION_TYPES.ADD_QUANTITY,
        id
    }
}