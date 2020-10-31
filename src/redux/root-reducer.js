// This is the actual base reducer object that represents the state of the entire application. It combines all the other slices of states.

import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

export default combineReducers({
    user: userReducer,
    cart: cartReducer    
})



