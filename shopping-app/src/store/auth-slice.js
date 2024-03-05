import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
});

// export const authActions = authSlice.actions;
// or
export const { login, logout } = authSlice.actions; // Destructuring action creators
export default authSlice.reducer; // Exporting reducer as default
