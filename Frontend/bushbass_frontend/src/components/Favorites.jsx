import React, { useState, useEffect, useContext } from 'react';
import Axios from 'axios';
import UserContext from '../context/UserContext';
import { useHistory, Link } from 'react-router-dom';

function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const { BACKEND_URL, userData } = useContext(UserContext);
  const history = useHistory();
  const [renderToggle, setRenderToggle] = useState(true);

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
  }, [BACKEND_URL, renderToggle]); // Or [] if effect doesn't need props or state

  useEffect(() => {
    if (!userData.user) history.push('/login');
  });

  //delete favorite
  const deleteFavorite = async (id) => {
    try {
      const token = localStorage.getItem('auth-token');
      console.log(id);
      await Axios.delete(`${BACKEND_URL}/favorites/${id}`, {
        headers: {
          'x-auth-token': token,
        },
      });
      setRenderToggle(!renderToggle);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='page'>
      {favorites.length > 0 ? (
        <>
          <h2>My Favorites</h2>
          <ul>
            {favorites.map((favorite) => {
              return (
                <div key={favorite._id}>
                  <li className='favorite-show-all'>
                    <Link to={`/${favorite.movieId}`}>
                      {' '}
                      {favorite.movieTitle}
                    </Link>
                    <button
                      onClick={() => deleteFavorite(favorite._id)}
                      className='delete-button'
                    >
                      X
                    </button>
                  </li>
                </div>
              );
            })}
          </ul>
        </>
      ) : (
        <div>
          <h2>No favorites selected</h2>
          <p>Go back and pick your favorites!</p>
        </div>
      )}
    </div>
  );
}

export default Favorites;
