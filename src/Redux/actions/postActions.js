import { FETCH_MOVIE_POST, FETCH_MOVIE_LIST } from './types';
import { fetchMovieFromAPI, fetchMovieItemFromAPI} from '../../Services/serviceOperations'


export function fetchPostsMovie(movieName) { 
  return async dispatch =>  {
  console.log('fetchPostsMovie');
  console.log(movieName);
try{
   var result = await fetchMovieFromAPI(movieName);
    dispatch({
      type: FETCH_MOVIE_LIST,
      payload:result.Search
    });
  }
  catch(error){
    console.log(error);
  }
};
}

export function fetchPostsMovieItem(imdbID) { 
  return async dispatch =>  {
  console.log('fetchPostsMovieItem');
  console.log(imdbID);
try{
   var result = await fetchMovieItemFromAPI(imdbID);
    dispatch({
      type: FETCH_MOVIE_POST,
      payload:result
    });
  }
  catch(error){
    console.log(error);
  }
};
}




