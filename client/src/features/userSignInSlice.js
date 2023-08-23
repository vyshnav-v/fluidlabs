import { createSlice } from "@reduxjs/toolkit";

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  loading: false,
  userInfo: userInfoFromStorage, // Store user info from local storage
  error: null,
};

const UserSigninSlice = createSlice({
  name: "UserSignin",
  initialState: initialState,
  reducers: {
    userLoginReq: (state, action) => {
      state.loading = true;
    },
    userLoginSuccess: (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
    },
    userLoginFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    userLogout: (state, action) => {
      state.userInfo = null; // Clear user info on logout
      state.error = null;
    },
  },
});

export const { userLoginReq, userLoginSuccess, userLoginFail, userLogout } =
  UserSigninSlice.actions;

export default UserSigninSlice.reducer;
