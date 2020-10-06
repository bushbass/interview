import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Axios from 'axios';
import UserContext from './context/UserContext';

import './index.css';
import Header from './components/Header';
import Home from './components/Home';
import Search from './components/Search';
import Movie from './components/Movie';
import Login from './components/Login';
import Register from './components/Register';

export default function App() {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=dff2ace9d4fe143fc9aad06522638b5c'
    )
      .then((response) => response.json())
      .then((data) => setMovieList(data.results));
  }, []);
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  const [BACKEND_URL] = useState(
    `https://hackclub-movie-backend.herokuapp.com` || 'http://localhost:5000'
  );

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem('auth-token');
      if (token === null) {
        localStorage.setItem('auth-token', '');
        token = '';
      }
      const tokenResponse = await Axios.post(
        `${BACKEND_URL}/users/tokenIsValid`,
        null,
        { headers: { 'x-auth-token': token } }
      );
      if (tokenResponse.data) {
        const userResponse = await Axios.get(`${BACKEND_URL}/users`, {
          headers: { 'x-auth-token': token },
        });
        setUserData({ token, user: userResponse.data });
      }
    };
    checkLoggedIn();
  }, [BACKEND_URL]);
  return (
    <Router>
      <UserContext.Provider value={{ userData, setUserData, BACKEND_URL }}>
        <div className='App'>
          <Header />
          {console.log(userData.user)}
          <Switch>
            <Route path='/search'>
              <Search movieList={movieList} />
            </Route>

            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/register'>
              <Register />
            </Route>
            <Route path='/:id' children={<Movie />} />
            <Route path='/'>
              <Home movieList={movieList} />
            </Route>
          </Switch>
        </div>
      </UserContext.Provider>
    </Router>
  );
}
