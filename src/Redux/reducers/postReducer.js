import { FETCH_MOVIE_POST } from '../actions/types';

const initialState = {
  
  movieItem: {}
 
  
};

export default function(state = initialState, action) {
  switch (action.type) {
    
      case FETCH_MOVIE_POST:
      console.log(action.payload);
      return{
        ...state,
        movieItem: action.payload
      }
     
    default:
      return state;
  }
}
