import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";




export const idProduct = createAsyncThunk(
  "detailsSlice/viewDetails",
  async (productId) => {
    const res = await axios.get(`http://localhost:9000/products/${productId}`);
    return res.data;
  },
);
export const detailsSlice = createSlice({
  initialState: null,
  name: "detailsSlice",
  reducers: {},

  extraReducers: (builder) => { 
    builder.addCase(idProduct.fulfilled, (state, action) => {
      return action.payload;
    });
  }
});

export const { viewDetails } = detailsSlice.actions;
export default detailsSlice.reducer;