import React, { useEffect, useState } from 'react';
import './index.css';
import Header from './components/Header';
import Home from './components/Home';

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
      <Header />
      <Home movieList={movieList} />
    </div>
  );
}
