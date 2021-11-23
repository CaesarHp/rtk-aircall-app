import { configureStore } from "@reduxjs/toolkit";
import { getDataSlice } from "./getDataSlice";
import { resetDataSlice } from "./resetDataSlice";
import { postDataSlice } from "./postDataSlice";

const store = configureStore({
  reducer: {
    getData: getDataSlice.reducer,
    resetData: resetDataSlice.reducer,
    postData: postDataSlice.reducer,
  },
});

export default store;
