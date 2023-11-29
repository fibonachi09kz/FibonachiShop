import {createSlice} from "@reduxjs/toolkit";

const initialState: any[] = []

export const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		toggleFavorites: (state, {payload: productId}) => {
			const isExists = state.some(r => r === productId)
			if (isExists) {
				const index = state.findIndex(item => item === productId)
				if (index !== -1) {
					state.splice(index, 1)
				}
			} else {
				state.push(productId)
			}
		}
	}
})

export const { actions, reducer } = favoritesSlice;