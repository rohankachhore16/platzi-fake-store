import { createAsyncThunk } from "@reduxjs/toolkit";
import { ASYNC_ROUTES } from "../constant/routesConstant";
import { LoginService } from "../services/authService";

export const LoginAsyncThunk = createAsyncThunk(
  ASYNC_ROUTES.LOGIN,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await LoginService(payload);
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
