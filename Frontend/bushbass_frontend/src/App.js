import React, { useEffect, useState } from 'react';
import './index.css';
import Card from './components/Card';

export default function App() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=dff2ace9d4fe143fc9aad06522638b5c'
    )
      .then((response) => response.json())
      .then((data) => setMovieList(data.results));
  }, []);

  return (
    <div className='App'>
      {movieList.map(
        ({ id, title, overview, vote_average, popularity, poster_path }) => (
          <Card
            key={id}
            title={title}
            overview={overview}
            vote_average={vote_average}
            popularity={popularity}
            id={id}
            poster_path={poster_path}
          />
        )
      )}
    </div>
  );
}
