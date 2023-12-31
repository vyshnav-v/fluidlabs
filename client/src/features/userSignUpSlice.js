import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  smessage: null, // Success message
  error: null, // Error message
  registered: null, // To store registered user data
};

const UserSignupSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userSignupReq: (state, action) => {
      state.loading = true;
      state.smessage = null;
      state.error = null;
      state.registered = null;
    },
    userSignupSuccess: (state, action) => {
      state.loading = false;
      state.smessage = "Registered Successfully";
      state.registered = action.payload; // Store registered user data
    },
    userSignupFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { userSignupReq, userSignupSuccess, userSignupFail } =
  UserSignupSlice.actions;

export default UserSignupSlice.reducer;
