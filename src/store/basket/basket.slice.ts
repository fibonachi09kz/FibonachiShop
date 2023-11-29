import {createSlice} from "@reduxjs/toolkit";

const initialState: any[] = []

export const basketSlice = createSlice({
	name: 'basket',
	initialState,
	reducers: {
		addToBasket: (state, { payload: { id, count } }) => {
			const existingProductIndex = state.findIndex(item => item.id === id);
			if (existingProductIndex !== -1) {
				state[existingProductIndex].count += count
			} else {
				state.push({
					id: id,
					count: count
				})
			}
		},
		removeFromBasket: (state, { payload: productId } ) => {
			const index = state.findIndex(item => item.id === productId)
			if (index !== -1) {
				state.splice(index, 1)
			}
		},
		editProductCount: (state,  { payload: { id, count } }) => {
			const existingProductIndex = state.findIndex(item => item.id === id);
			if (existingProductIndex !== -1) {
				state[existingProductIndex].count = count
			}
		}
	}
})

export const { actions, reducer } = basketSlice;