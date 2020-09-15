import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
    <div>
      <p>movie component</p>
      <h3>ID: {id}</h3>
      {console.log(currentMovie)}
      <p>{currentMovie.title}</p>
      <p>{currentMovie.overview}</p>
    </div>
  );
}

export default Movie;
