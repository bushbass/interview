import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './movie.css';

function Movie() {
  const [currentMovie, setCurrentMovie] = useState({});
  let { id } = useParams();
  let connectionString = `https://api.themoviedb.org/3/movie/${id}?api_key=dff2ace9d4fe143fc9aad06522638b5c`;

  useEffect(() => {
    fetch(connectionString)
      .then((response) => response.json())
      .then((data) => setCurrentMovie(data));
  }, [connectionString]);

  return (
    <div className='single-movie-card'>
      {console.log(currentMovie)}
      <h2>
        {currentMovie.title} -{' '}
        {currentMovie.release_date
          ? currentMovie.release_date.substring(0, 4)
          : currentMovie.release_date}
      </h2>
      <img
        src={`https://image.tmdb.org/t/p/w300${currentMovie.poster_path}`}
        alt={currentMovie.title}
      />
      <p>{currentMovie.overview}</p>
    </div>
  );
}

export default Movie;
