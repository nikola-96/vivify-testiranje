import React from 'react';
import { deleteMovie } from '../../services/MovieService';

function ButtonComoponent({ id, deleteMovie }) {
  return (
    <button className="btn-delete" onClick={() => deleteMovie(id)}>
      Delete
    </button>
  );
}

export default ButtonComoponent;
