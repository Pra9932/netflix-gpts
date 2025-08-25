import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovie, addPopularMovie } from "../utils/movieSlice";
import { api_options } from "../utils/constants";

const usePopularMovies = () => {
  //Fetch data from TMDB API and update the store
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      api_options
    );
    const json = await data.json();
    dispatch(addPopularMovie(json.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
