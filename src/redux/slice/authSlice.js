import { createSlice } from "@reduxjs/toolkit";
import { LoginAsyncThunk, ProfileAsyncThunk } from "../asyncThunk/authAsyncThunk";
import { THUNK_STATUS } from "../constant/routesConstant";

const initialState = {
  data: null,
  token: null,
  user: null,

    loginStatus: null,
    profileStatus:null,

};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    removeToken: (state, action) => {
      state.token = null;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(LoginAsyncThunk.pending, (state, action) => {
      state.loginStatus= THUNK_STATUS.LOADING;
    });
    builder.addCase(LoginAsyncThunk.fulfilled, (state, action) => {
      state.loginStatus = THUNK_STATUS.SUCCESS;
      state.token = action?.payload?.data;
    });
    builder.addCase(LoginAsyncThunk.rejected, (state, action) => {
      state.loginStatus= THUNK_STATUS.FAILED;
    });
  
    // profile slice
    builder.addCase(ProfileAsyncThunk.pending, (state, action) => {
      state.profileStatus= THUNK_STATUS.LOADING;
    });
    builder.addCase(ProfileAsyncThunk.fulfilled, (state, action) => {
      // console.log(action,"______priofile Actions")
      state.profileStatus = THUNK_STATUS.SUCCESS;
      state.user = action?.payload?.data;
    });
    builder.addCase(ProfileAsyncThunk.rejected, (state, action) => {
      state.profileStatus = THUNK_STATUS.FAILED;
    });


  },
});

export const { removeToken } = authSlice.actions;
export const authState = (state) => state.authState;

export default authSlice.reducer;



