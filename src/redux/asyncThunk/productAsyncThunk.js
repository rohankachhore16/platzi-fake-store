import { createAsyncThunk } from "@reduxjs/toolkit";
import { ASYNC_ROUTES } from "../constant/routesConstant";
import { productService } from "../services/productService";

export const ProductAsyncThunk=createAsyncThunk(
  ASYNC_ROUTES.PRODUCT, 
  async(payload,{rejectWithValue})=>{
    try{
      const response = await productService(payload)
      return response
    }catch(err){
      return rejectWithValue(err)
    }

  }
)