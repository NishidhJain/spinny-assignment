import { createSlice } from "@reduxjs/toolkit";

export const pageNumberSlice = createSlice({
  name: "pageNumber",
  initialState: {
    pageNo: 1,
  },
  reducers: {
    incrementPageNo: (state) => {
      state.pageNo += 1;
    },
    resetPageNo: (state) => {
      state.pageNo = 1;
    },
  },
});

export const { incrementPageNo, resetPageNo } = pageNumberSlice.actions;

export default pageNumberSlice.reducer;
