import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Home from './Application/components/Home';  //<Search />
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
         <Home />
        </div>
      </Provider>
    );
  }
}

export default App;
