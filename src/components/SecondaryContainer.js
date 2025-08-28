import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovie && (
      <div className="bg-black">
        <div className="mt-0 md:-mt-32 pl-4 md:pl-12 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovie} />
          <MovieList title={"Trending"} movies={movies.nowPlayingMovie} />
          <MovieList title={"Popular"} movies={movies.popularMovie} />
          <MovieList
            title={"upcoming Movies"}
            movies={movies.nowPlayingMovie}
          />
          <MovieList title={"Horror"} movies={movies.nowPlayingMovie} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
