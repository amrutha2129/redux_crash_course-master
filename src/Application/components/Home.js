import React, { Component } from 'react';
import Search from './Search'; //<Search />
import DisplayMovieItem from './DisplayMovieItem';
import {fetchPostsMovie} from '../../Redux/actions/postActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Home extends Component{
  
    render(){
       return(
           <div>
                <Search handleClick={this.props.handleClick} /> 
                <DisplayMovieItem movieItem={this.props.movieItem}  />            
           </div>
       
       );
   }

}
 
Home.propTypes = {
 
    movieItem: PropTypes.object

};

const mapDispatchToProps = dispatch => ({
    handleClick: (movieName) => {
      dispatch(fetchPostsMovie(movieName));
    }
  });
  

const mapStateToProps = state => ({
    movieItem: state.movie.movieItem
 
   });
 
 export default connect(mapStateToProps,mapDispatchToProps)(Home);

