import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as favoritesReducer } from "./favorites/favorites.slice";
import { reducer as basketReducer } from "./basket/basket.slice";
import { reducer as userReducer } from "./user/user.slice";
import { reducer as productsReducer } from "./products/products.slice";
import { api } from "./api/api";

const reducers = combineReducers({
  favorites: favoritesReducer,
  basket: basketReducer,
  user: userReducer,
  products: productsReducer,
  [api.reducerPath]: api.reducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
