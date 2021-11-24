import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const resetDataApi = process.env.AIR_CALL_RESET_DATA_API;

export const resetData = createAsyncThunk("data/resetData", async () => {
  const { data } = await axios.get(resetDataApi);

  return data;
});

export const resetDataSlice = createSlice({
  name: "resetData",
  initialState: {
    activities: [],
    isLoading: null,
    status: null,
  },
  reducers: {},
  extraReducers: {
    [resetData.pending]: (state) => {
      state.isLoading = true;
      state.status = "isLoading";
    },
    [resetData.fulfilled]: (state) => {
      state.isLoading = false;
      state.status = "fulfilled";
      //state.activities = action.payload;
    },
    [resetData.rejected]: (state) => {
      state.isLoading = false;
      state.status = "rejected";
    },
  },
});

export const resetDataActions = resetDataSlice.actions;
