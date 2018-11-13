import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class DisplayMovieItem extends PureComponent {

      render() {
      console.log("displayItem");
        return (
            <div >
                <br/><br/><br/>
                <img height="250" width="250" src = {this.props.movieItem.Poster}/>
                <h3>{this.props.movieItem.Title}</h3>
                <p>{this.props.movieItem.Genre}</p>
                <p>{this.props.movieItem.Actors}</p>
                <p>{this.props.movieItem.Released}</p>
                <p>{this.props.movieItem.Language}</p>

            </div>
        );
    }
}

DisplayMovieItem.propTypes = {
   
    movieItem: PropTypes.object
};



