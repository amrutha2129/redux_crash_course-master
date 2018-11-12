import { FETCH_MOVIE_POST } from './types';
import { fetchMovieFromAPI} from '../../Services/serviceOperations'


export function fetchPostsMovie(movieName) { 
  return async dispatch =>  {
  console.log('fetchPostsMovie');
  console.log(movieName);
try{
   var result = await fetchMovieFromAPI(movieName);
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


