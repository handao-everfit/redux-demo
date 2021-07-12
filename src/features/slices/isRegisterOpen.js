import { createSlice } from "@reduxjs/toolkit";

export const isRegisterOpen = createSlice({
  name: "isRegisterOpen",
  initialState: {
    value: false,
  },
  reducers: {
    openRegister: (state) => {
      state.value = true;
    },
    closeRegister: (state) => {
      state.value = false;
    },
  },
});

export const { closeRegister, openRegister } = isRegisterOpen.actions;

export default isRegisterOpen.reducer;
