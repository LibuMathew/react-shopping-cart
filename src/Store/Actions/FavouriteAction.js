

import * as ACTION_TYPES from './Action_Types/FavouriteActionTypes';

export const addToFavourite = (id) => {
    return {
        type: ACTION_TYPES.ADD_TO_FAVOURITE,
        id
    }
}

export const removeFavourite = (id) => {
    return {
        type: ACTION_TYPES.REMOVE_FAVOURITE,
        id
    }
}