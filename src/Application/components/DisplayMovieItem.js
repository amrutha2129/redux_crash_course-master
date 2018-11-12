import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class DisplayMovieItem extends PureComponent {

      render() {
      console.log("display");
        return (
            <div >
                <br/><br/><br/>
                <img height="250" width="250" src = {this.props.movieItem.Poster}/>
                <h3>Title:{this.props.movieItem.Title}</h3>
                <p>Genre:{this.props.movieItem.Genre}</p>
                <p>Actors:{this.props.movieItem.Actors}</p>
                <p>Released:{this.props.movieItem.Released}</p>
                <p>Language:{this.props.movieItem.Language}</p>

            </div>
        );
    }
}

DisplayMovieItem.propTypes = {
   
    movieItem: PropTypes.object
};

