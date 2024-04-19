import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, { payload }: PayloadAction<UserInterface>) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isAuthenticated = true;
      if (payload.token !== null) {
        AsyncStorage.setItem("authToken", payload.token);
      }
    },
    logoutUser: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      AsyncStorage.removeItem("authToken");
    },
    registerUser: (state, { payload }: PayloadAction<UserInterface>) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isAuthenticated = true;
      if (payload.token !== null) {
        AsyncStorage.setItem("authToken", payload.token);
      }
    },
  },
});

export const { actions, reducer } = userSlice;
