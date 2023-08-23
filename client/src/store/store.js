import { configureStore } from "@reduxjs/toolkit";
import UserSigninReducer from "../features/userSignInSlice";
import UserSignupReducer from "../features/userSignUpSlice";
export const store = configureStore({
  reducer: {
    userSignin: UserSigninReducer,
    userSignup: UserSignupReducer,
  },
});