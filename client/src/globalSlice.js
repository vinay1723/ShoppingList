import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  user: null,
  mylist: [],
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    setMyList(state, action) {
      state.mylist = action.payload;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const { setProducts, setMyList, setUser } = globalSlice.actions;

export default globalSlice.reducer;
