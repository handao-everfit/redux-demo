import { configureStore } from "@reduxjs/toolkit";

import isLoginOpenReducer from "./features/slices/isLoginOpen";
import isRegisterOpenReducer from "./features/slices/isRegisterOpen";
import userReducer from "./features/slices/userSlice";

export default configureStore({
  reducer: {
    isLoginOpen: isLoginOpenReducer,
    isRegisterOpen: isRegisterOpenReducer,
    user: userReducer,
  },
});
