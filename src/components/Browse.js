import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
    useNowPlayingMovies();
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
     { /*
      MainContainert
         -video Background
         - Video Title
       Secondary Container
         -Movie List*n
         -Cards*n  
      */}
    </div>
  )
}

export default Browse;
