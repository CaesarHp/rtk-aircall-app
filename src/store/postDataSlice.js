import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const postData = createAsyncThunk("data/postData", async (obj) => {
  const { id, archive } = obj;
  const { data } = await axios.post(
    `https://aircall-job.herokuapp.com/activities/${id}`,
    {
      is_archived: !archive,
    }
  );

  return data;
});

export const postDataSlice = createSlice({
  name: "postData",
  initialState: {
    message: false,
    isLoading: null,
    status: null,
  },
  reducers: {},
  extraReducers: {
    [postData.pending]: (state) => {
      state.isLoading = true;
      state.status = "isLoading";
    },
    [postData.fulfilled]: (state) => {
      state.isLoading = false;
      state.status = "fulfilled";
      state.message = !state.message;
    },
    [postData.rejected]: (state) => {
      state.isLoading = false;
      state.status = "rejected";
    },
  },
});

export const postDataActions = postDataSlice.actions;
