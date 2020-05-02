import * as ACTION_TYPES from '../Actions/Action_Types/FavouriteActionTypes';

const initalState = {
    favourites: []
}

const favouriteReducer = (state = initalState, action) => {
    switch (action.type) {
        case ACTION_TYPES.ADD_TO_FAVOURITE: {
            let existedItem = state.favourites.indexOf(action.id);
            if (existedItem === -1) {
                return {
                    ...state,
                    favourites: [...state.favourites, action.id]
                }
            }
            return state;
        }
        case ACTION_TYPES.REMOVE_FAVOURITE: {
            return {
                ...state,
                favourites: state.favourites.filter(id => id !== action.id),
            }
        }
        default:
            return state;
    }
}

export default favouriteReducer;