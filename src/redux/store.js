import { configureStore } from "@reduxjs/toolkit";
import pageNumberReducer from "./slices/pageNumberSlice";
import serachReducer from "./slices/searchSlice";

export default configureStore({
  reducer: {
    pageNumber: pageNumberReducer,
    search: serachReducer
  }
});
