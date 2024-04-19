import { createSlice } from "@reduxjs/toolkit";
import { api } from "../api/api";
import { IProduct } from "../../types/product.types";

const initialState: IProduct[] = [];

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.getProducts.matchFulfilled,
      (state, action) => {
        return action.payload.result.elements;
      }
    );
  },
});

export const { actions, reducer } = productsSlice;
