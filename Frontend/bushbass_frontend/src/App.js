import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './index.css';
import Header from './components/Header';
import Home from './components/Home';
import Search from './components/Search';
import Movie from './components/Movie';

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
    <Router>
      <div className='App'>
        <Header />
        <Switch>
          <Route path='/search'>
            <Search movieList={movieList} />
          </Route>

          <Route path='/:id' children={<Movie />} />

          <Route path='/'>
            <Home movieList={movieList} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
