import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserInterface {
    token: string | null;
    email: string | null;
    isAuthenticated: boolean;
}

const initialState: UserInterface = {
    token: null,
    email: null,
    isAuthenticated: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginUser: (state, { payload }: PayloadAction<UserInterface>) => {
            state.email = payload.email;
            state.token = payload.token;
            state.isAuthenticated = true;
        },
        logoutUser: (state) => {
            state.email = null;
            state.token = null;
            state.isAuthenticated = false;
        },
        registerUser: (state, { payload }: PayloadAction<UserInterface>) => {
            state.email = payload.email;
            state.token = payload.token;
            state.isAuthenticated = true;
        },
    },
});

export const { actions, reducer } = userSlice;