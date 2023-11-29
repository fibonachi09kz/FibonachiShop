import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserInterface {
    token: string | null;
    user: any | null;
    isAuthenticated?: boolean;
}

const initialState: UserInterface = {
    token: null,
    user: null,
    isAuthenticated: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginUser: (state, { payload }: PayloadAction<UserInterface>) => {
            state.user = payload.user;
            state.token = payload.token;
            state.isAuthenticated = true;
        },
        logoutUser: (state) => {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
        },
        registerUser: (state, { payload }: PayloadAction<UserInterface>) => {
            state.user = payload.user;
            state.token = payload.token;
            state.isAuthenticated = true;
        },
    },
});

export const { actions, reducer } = userSlice;
