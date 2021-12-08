import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: "onepunchman",
    results: [],
    loading: false,
  },
  reducers: {
    updateQuery: (state, action) => {
      return { ...state, query: action.payload, results: [] };
    },
    updateResults: (state, action) => {
      return { ...state, results: [...state.results, ...action.payload] };
    },
    updateLoadingState: (state, action) => {
      return { ...state, loading: action.payload };
    },
  },
});

export const { updateQuery, updateResults, updateLoadingState } =
  searchSlice.actions;

export default searchSlice.reducer;
