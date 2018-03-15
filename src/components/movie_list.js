import React from 'react';
import MovieListItem from './movie_list_item';

const MovieList = (props) => {
  const movieItems = props.movies.map((movie) => {
    return (
      <MovieListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video} />
    );
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;
