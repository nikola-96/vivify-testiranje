import React from 'react';

import MovieCard from './MovieCard';

function MovieList({ movies, deleteMovie }) {
  return (
    <div className="card-deck">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} deleteMovie={deleteMovie} />
      ))}
    </div>
  );
}

export default MovieList;
