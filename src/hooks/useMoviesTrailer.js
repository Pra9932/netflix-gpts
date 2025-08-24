import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { api_options } from '../utils/constants';
import { addTrailerVideo } from '../utils/movieSlice';

  const useMoviesTrailer = (movieId) => {
  const dispatch=useDispatch();
  //Fetch trailer video && updating the store
  const getMovieVideos=async () =>{
    const data=await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",api_options);
    const json=await data.json();
    const trailer=json.results.find((vid)=>vid.name==="Official Trailer");
    dispatch(addTrailerVideo(trailer));
  };
  
  useEffect(()=>{
    getMovieVideos();   
  },[]);
}

export default useMoviesTrailer
