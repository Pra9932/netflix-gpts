import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const configSlice = createSlice({
  name: "config",
  initialState: {
    lang: "en",
  },
  reducers: {
    changeLang: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export default configSlice.reducer;
export const { changeLang } = configSlice.actions;
