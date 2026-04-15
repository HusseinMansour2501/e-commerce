import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "productsSlice/fetchProducts",
  async () => {
    const response = await axios.get("https://dummyjson.com/products");
    return response.data.products;
  },
);

const productsSlice = createSlice({
  name: "productsSlice",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      console.error("Fetch failed:", action.error.message);
      return []; 
    });
  },
});

export default productsSlice.reducer;
