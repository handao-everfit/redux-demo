import { configureStore } from "@reduxjs/toolkit";

import isLoggedReducer from "./features/slices/isLoggedSlice";
import isLoginOpenReducer from "./features/slices/isLoginOpen";
import isRegisterOpenReducer from "./features/slices/isRegisterOpen";
import userReducer from "./features/userSlice";

export default configureStore({
  reducer: {
    isLogged: isLoggedReducer,
    isLoginOpen: isLoginOpenReducer,
    isRegisterOpen: isRegisterOpenReducer,
    user: userReducer,
  },
});
