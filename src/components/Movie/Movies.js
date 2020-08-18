import React, { useState, useEffect } from 'react';

import MovieList from './MovieList';
import MovieService from '../../services/MovieService';
import FormComopnent from '../create-new-movie/FormComponent';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [addMovie, setFormMovie] = useState(false);
  const setFormMovieState = value => {
    setFormMovie(value);
  };

  const deleteMovie = id => {
    const newMovies = movies.filter(movie => movie.id !== id);
    setMovies(newMovies);
  };

  const addNewMovie = movie => {
    movie.id = movies.length + 1;
    movies.push(movie);
  };

  useEffect(() => {
    setMovies(MovieService.getMovies());
  }, []);
  return (
    <div>
      {addMovie ? (
        <FormComopnent addNewMovie={addNewMovie} setMovieState={setFormMovieState} />
      ) : (
        <div className="container-fluid" style={{ marginLeft: '-15px' }}>
          <div className="d-flex flex-row">
            <div className="col-sm-12">
              <MovieList movies={movies} deleteMovie={deleteMovie} />
            </div>
          </div>
          <button onClick={() => setFormMovieState(true)}>Add Movie</button>
        </div>
      )}
    </div>
  );
}

export default Movies;
