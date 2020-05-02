import { combineReducers } from 'redux';
import CartReducer from './CartReducer';
import FavouriteReducer from './FavouriteReducer';

export default combineReducers({
    CartReducer,
    FavouriteReducer
});