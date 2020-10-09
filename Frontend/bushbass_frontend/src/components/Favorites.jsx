import React, { useState, useEffect, useContext } from 'react';
import Axios from 'axios';
import UserContext from '../context/UserContext';
import { useHistory, Link, useParams } from 'react-router-dom';

function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const { BACKEND_URL, userData } = useContext(UserContext);
  const history = useHistory();
  // const [renderToggle, setRenderToggle] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const token = localStorage.getItem('auth-token');
      const getAllResponse = await Axios.get(`${BACKEND_URL}/favorites`, {
        headers: {
          'x-auth-token': token,
        },
      });

      setFavorites(getAllResponse.data);
    }
    fetchData();
  }, [BACKEND_URL]); // Or [] if effect doesn't need props or state

  useEffect(() => {
    if (!userData.user) history.push('/login');
  });

  const deleteTodo = () => console.log('delete! coming soon');

  return (
    <div className='page'>
      {console.log(favorites)}
      <h2>My Favorites</h2>
      <ul>
        {favorites.map((favorite) => {
          return (
            <div key={favorite._id}>
              <li className='favorite-show-all'>
                <Link to={`/${favorite.movieId}`}> {favorite.movieId}</Link>
                <button
                  onClick={() => deleteTodo(favorite._id)}
                  className='delete-button'
                >
                  XXXXXX
                </button>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Favorites;
