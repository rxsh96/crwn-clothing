import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import cartReducers from './cart/cart.reducers';

export default combineReducers ({
    user: userReducer,
    cart: cartReducers
});