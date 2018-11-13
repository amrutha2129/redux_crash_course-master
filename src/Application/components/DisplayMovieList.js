import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class DisplayMovieList extends PureComponent {

      render() {
      console.log("displayList");
//onClick={() => {this.props.handleClickReadMore(movieItem.imdbID)}}
      const movieItems = this.props.movies.map(movieItem => (
        <div key={movieItem.imdbID}>
        <br/>
         <img height="250" width="250" src = {movieItem.Poster}/>
          <h3>Title: {movieItem.Title}</h3>
          <p>Realeased : {movieItem.Year}</p>
          <button onClick={() => {this.props.handleClickReadMore(movieItem.imdbID)}} >Read More</button>
        </div>
        
      ));
      
        return (
            <div>
            {movieItems}
            </div>
        );
    }
}

DisplayMovieList.propTypes = {
     movies: PropTypes.array,
   // movieItem: PropTypes.object
     handleClickReadMore: PropTypes.func.isRequired
};

