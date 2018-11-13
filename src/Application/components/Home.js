import React, { Component } from 'react';
import Search from './Search'; //<Search />
import DisplayMovieList from './DisplayMovieList';
import {fetchPostsMovie,fetchPostsMovieItem} from '../../Redux/actions/postActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DisplayMovieItem from './DisplayMovieItem';


class Home extends Component{
  // <DisplayMovieItem movieItem={this.props.movieItem}  />               handleClickReadMore={this.props.handleClickReadMore}
    render(){
       return(
           <div>
                <Search handleClick={this.props.handleClick} /> 
                <DisplayMovieList movies={this.props.movies} handleClickReadMore={this.props.handleClickReadMore} /> 
                <DisplayMovieItem movieItem={this.props.movieItem}  />         
           </div>
       
       );
   }

}
 
Home.propTypes = {
 
    movieItem: PropTypes.object,
    movies: PropTypes.array
};

const mapDispatchToProps = dispatch => ({
    handleClick: (movieName) => {
      dispatch(fetchPostsMovie(movieName));
    },
    handleClickReadMore: (imdbID) => {
        dispatch(fetchPostsMovieItem(imdbID));
    }
  });
  

const mapStateToProps = state => ({
    movieItem: state.movie.movieItem,
    movies: state.movieList.movies
   });
 
 export default connect(mapStateToProps,mapDispatchToProps)(Home);

