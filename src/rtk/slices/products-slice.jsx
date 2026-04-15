import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk("productsSlice/fetchProducts", async () => {
  const res = await axios.get("https://dummyjson.com/products");
  return res.data;
});

const productsSlice = createSlice({
  initialState: [],
  name: "productsSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload;
    });
  }
    
});


export default productsSlice.reducer;