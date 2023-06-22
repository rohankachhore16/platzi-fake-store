import { createSlice } from "@reduxjs/toolkit";
import { LoginAsyncThunk } from "../asyncThunk/authAsyncThunk";
import { THUNK_STATUS } from "../constant/routesConstant";

const initialState = {
  data: null,
  token: null,
  user: null,
  status: {
    login_status: null,
  },
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
      state.status = THUNK_STATUS.LOADING;
    });
    builder.addCase(LoginAsyncThunk.fulfilled, (state, action) => {
      console.log(action, "_________Action");
      state.status = THUNK_STATUS.SUCCESS;
      state.token = action?.payload?.data;
    });
    builder.addCase(LoginAsyncThunk.rejected, (state, action) => {
      state.status = THUNK_STATUS.FAILED;
    });
  },
});

export const { removeToken } = authSlice.actions;
export const authState = (state) => state.authState;

export default authSlice.reducer;
