import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as favoritesReducer } from "./favorites/favorites.slice";
import { reducer as basketReducer } from './basket/basket.slice';
import { reducer as userReducer} from './user/user.slice';

const reducers = combineReducers({
    favorites: favoritesReducer,
    basket: basketReducer,
    user: userReducer
})

export const store = configureStore({
    reducer: reducers
})