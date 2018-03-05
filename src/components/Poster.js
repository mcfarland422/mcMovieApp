import React, { Component } from 'react';

class Poster extends Component{
	render(){
		var title = this.props.movie.title;
		var imagePath = `http://image.tmdb.org/t/p/w300${this.props.movie.poster_path}`;
		// var moviePath = `http://www.themoviedb.org/movie/${this.props.movie.id}`
		return(
			<div className="col-sm-3 text-center">
				<img src={imagePath} />
				<div className="col-sm-12">
					{title}
				</div>

			</div>
		)
	}
}

export default Poster;
