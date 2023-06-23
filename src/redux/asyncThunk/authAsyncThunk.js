import { createAsyncThunk } from "@reduxjs/toolkit";
import { ASYNC_ROUTES } from "../constant/routesConstant";
import { CreateUserService, LoginService, profileService } from "../services/authService";

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

export const CreateUserAsyncThunk = createAsyncThunk(
  ASYNC_ROUTES.SIGNUP,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await CreateUserService(payload);
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
export const ProfileAsyncThunk = createAsyncThunk(
  ASYNC_ROUTES.PROFILE,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await profileService(payload);
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);