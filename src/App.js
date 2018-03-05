import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const API_KEY = 'AIzaSyAyRYXl14X5bzCohMMC6tjs5qih1VYHhWs';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      movies: []
      selectedVideo: null
    };
    
  }

  render() {
    var postersArray = this.state.movies.map((movie,))
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
