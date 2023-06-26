import { createSlice } from "@reduxjs/toolkit";
import { ProductAsyncThunk } from "../asyncThunk/productAsyncThunk";
import { THUNK_STATUS } from "../constant/routesConstant";
const initialState = {
  data: null,
  productStatus: null,
};
export const GetProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(ProductAsyncThunk.pending, (state, action) => {
      state.productStatus = THUNK_STATUS.LOADING;
    });
    builder.addCase(ProductAsyncThunk.fulfilled, (state, action) => {
      state.productStatus = THUNK_STATUS.SUCCESS;
    });
    builder.addCase(ProductAsyncThunk.rejected, (state, action) => {
      state.ProductAsyncThunk = THUNK_STATUS.FAILED;
    });
  },
});

export const GetProductState = (state) => state.GetProductSlice;
export default GetProductSlice.reducer;
