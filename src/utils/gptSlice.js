import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieName: null,
    movieResult: null,
  },
  reducers: {
    toggleGptSearch: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResults: (state, action) => {
      const { movieName, movieResult } = action.payload;
      state.movieName = movieName;
      state.movieResult = movieResult;
    },
  },
});

export const { toggleGptSearch, addGptMovieResults } = gptSlice.actions;
export default gptSlice.reducer;
