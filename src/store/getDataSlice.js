import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getDataApi = process.env.AIR_CALL_GET_DATA_API;

export const getData = createAsyncThunk("data/getData", async () => {
  const { data } = await axios.get(getDataApi);

  return data;
});

export const getDataSlice = createSlice({
  name: "getData",
  initialState: {
    activities: [],
    isLoading: null,
    status: null,
  },
  reducers: {},
  extraReducers: {
    [getData.pending]: (state) => {
      state.isLoading = true;
      state.status = "isLoading";
    },
    [getData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.status = "fulfilled";
      state.activities = action.payload;
    },
    [getData.rejected]: (state) => {
      state.isLoading = false;
      state.status = "rejected";
    },
  },
});

export const getDataActions = getDataSlice.actions;
