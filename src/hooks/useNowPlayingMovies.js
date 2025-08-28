import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovie } from "../utils/movieSlice";
import { api_options } from "../utils/constants";

const useNowPlayingMovies = () => {
  //Fetch data from TMDB API and update the store
  const dispatch = useDispatch();

  const nowPlayingMovie = useSelector((store) => store.movies?.nowPlayingMovie);

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      api_options
    );
    const json = await data.json();
    dispatch(addNowPlayingMovie(json.results));
  };

  useEffect(() => {
    if (!nowPlayingMovie) getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
