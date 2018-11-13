import { FETCH_MOVIE_POST, FETCH_MOVIE_LIST } from '../actions/types';

const initialState = {
  
  movieItem: {},
  movies: []
  
};

export default function(state = initialState, action) {
  switch (action.type) {
    
      case FETCH_MOVIE_POST:
      console.log(action.payload);
      return{
        ...state,
        movieItem: action.payload
      
      }

      case FETCH_MOVIE_LIST:
      console.log(action.payload);
      return{
        ...state,
        movies: action.payload
      }
     
    default:
      return state;
  }
}
