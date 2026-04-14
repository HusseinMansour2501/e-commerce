import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk("productsSlice/fetchProducts", async () => {
  const res = await axios.get("http://localhost:9000/products");
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

export const {} = productsSlice.actions;
export default productsSlice.reducer;