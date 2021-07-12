import { configureStore } from "@reduxjs/toolkit";

import isLoggedReducer from "./features/login/slices/isLoggedSlice";
import isLoginOpenReducer from "./features/login/slices/isLoginOpen";
import isRegisterOpenReducer from "./features/login/slices/isRegisterOpen";
import userReducer from "./features/login/userSlice";

export default configureStore({
  reducer: {
    isLogged: isLoggedReducer,
    isLoginOpen: isLoginOpenReducer,
    isRegisterOpen: isRegisterOpenReducer,
    user: userReducer,
  },
});
