import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';


export default class Search extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
          movieName: ''
        };
    
       this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        e.preventDefault();
        this.setState({movieName: e.target.value });
      }

      buttonClick = () => {
        //    e.preventDefault();
            this.props.handleClick(this.state.movieName);
      };


    render() {
    console.log(this.state);
        return (
           
            <div>
                <br />
                <h2>       MOVIE DATABASE    </h2>
                <input
                    type="text"
                    placeholder="Enter Movie Title..."
                    onChange={this.onChange}
                    value= {this.state.movieName}
                    />                    
                    <button onClick={this.buttonClick}> Search </button>
                    <br /><br /><br />
            </div>
      
        );
    }
}

Search.propTypes = {
   
      handleClick: PropTypes.func.isRequired
  };

  