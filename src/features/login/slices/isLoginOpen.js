import { createSlice } from "@reduxjs/toolkit";

export const isLoginOpen = createSlice({
  name: "isLoginOpen",
  initialState: {
    value: true,
  },
  reducers: {
    closeLogin: (state) => {
      state.value = false;
    },
    openLogin: (state) => {
      state.value = true;
    },
  },
});

export const { closeLogin, openLogin } = isLoginOpen.actions;

export default isLoginOpen.reducer;
