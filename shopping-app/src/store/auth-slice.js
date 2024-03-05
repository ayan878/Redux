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

// Option 1: Exporting action creators as a named export
// export const authActions = authSlice.actions;

// Option 2: Destructuring action creators and exporting them individually
export const { login, logout } = authSlice.actions;

export default authSlice.reducer; // Exporting reducer as default
