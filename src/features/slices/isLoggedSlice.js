import { createSlice } from "@reduxjs/toolkit";

export const isLoggedSlice = createSlice({
  name: "isLogged",
  initialState: {
    value: false,
  },
  reducers: {
    login: (state) => {
      state.value = true;
    },
    logout: (state) => {
      state.value = false;
    },
  },
});

export const { login, logout } = isLoggedSlice.actions;

export default isLoggedSlice.reducer;
