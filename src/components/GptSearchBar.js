import React, { useRef } from "react";
import lang from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import client from "../utils/openAi";
import { api_options } from "../utils/constants";
import { addGptMovieResults } from "../utils/gptSlice"; // <-- use curly braces

const GptSearchBar = () => {
  const dispatch = useDispatch(); // <-- fix typo
  const langKey = useSelector((store) => store.config.lang);
  const searchtext = useRef(null);
  //Search movie in TMDB
  const searchMovieInTmdb = async (movieName) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movieName +
        "&include_adult=false&language=en-US&page=1",
      api_options
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSeacrcClick = async () => {
    console.log(searchtext.current.value);
    // Make an api call to GPT API AND GET Movie Result
    const gptQuery =
      "Act as movie recommendation system and suggest the movies for the query " +
      searchtext.current.value +
      ". Only give names of five movies, comma separated like the example Result given ahead. Example Result: Inception,Interstellar,The Dark Knight,The Matrix,Avatar";
    try {
      const GptResults = await client.chat.completions.create({
        model: "deepseek/deepseek-r1-0528-qwen3-8b:free", // Use a valid model name
        messages: [
          {
            role: "user",
            content: gptQuery,
          },
        ],
      });

      if (!GptResults.choices) {
        //toDo write error handling
      }
      console.log(GptResults.choices?.[0]?.message?.content);
      //Inception,Interstellar,The Dark Knight,The Matrix,Avatar
      const GptMovies = GptResults.choices?.[0]?.message?.content.split(",");
      //[Inception,Interstellar,The Dark Knight,The Matrix,Avatar]
      //For each movie,I will search tmdb API
      const promiseArray = GptMovies.map((movieName) =>
        searchMovieInTmdb(movieName)
      );
      //promise,promise,promise,promise,promise
      const TMDBResults = await Promise.all(promiseArray);
      console.log(TMDBResults);
      dispatch(
        addGptMovieResults({ movieName: GptMovies, movieResult: TMDBResults })
      ); // <-- fix typo
    } catch (error) {
      console.error("GPT API error:", error);
    }
  };
  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchtext}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className=" col-span-3 py-2 px-4 m-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSeacrcClick}
        >
          {lang[langKey].Search}
        </button>
      </form>
    </div>
  );
};
export default GptSearchBar;
