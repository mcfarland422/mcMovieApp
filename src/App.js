import React, { Component } from 'react';
import './App.css';
// import SearchBar from './components/search_bar';
import $ from 'jquery';
import Poster from './components/Poster';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      movies: []
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    console.log("The component mounted");
    var url = 'http://api.themoviedb.org/3/movie/now_playing?api_key=fec8b5ab27b292a68294261bb21b04a5'
    $.getJSON(url,(movieData)=>{
      console.log(movieData);
      this.setState({
        movies:movieData.results
      });
    });
  }

  onInputChange(term){
    var value = document.getElementById('searchTerm').value;
    document.getElementById('searchTerm').value = "";
    var url = 'https://api.themoviedb.org/3/search/movie?api_key=fec8b5ab27b292a68294261bb21b04a5&query='+value
    $.getJSON(url,(movieSearchData)=>{
      this.setState({
        // this will cause a re-render
        movies: movieSearchData.results
      })
    });
  }

  render() {
    var postersArray = this.state.movies.map((movie,index)=>{
      return(<Poster key={index} movie={movie} />)
    });

    console.log(postersArray)
    return (
      <div className="App">
        <div className="col-sm-12 text-center">
          <form onSubmit={this.handleSubmit}>
            <input
              id="searchTerm"
              type="text"
              placeholder="Search Movies"
              onChange={event => this.onInputChange(event.target.value)} />
            <button type="submit" className="btn btn-primary">Search</button>
          </form>
        </div>
        {postersArray}
      </div>
    );
  }
}

export default App;
