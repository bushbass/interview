import React, { useState, useEffect, useContext } from 'react';
import Axios from 'axios';
import UserContext from '../context/UserContext';
import { useHistory } from 'react-router-dom';

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

  // //delete todo
  // const deleteTodo = async (id) => {
  //   try {
  //     const token = localStorage.getItem("auth-token");

  //     await Axios.delete(`${BACKEND_URL}/todos/${id}`, {
  //       headers: {
  //         "x-auth-token": token
  //       }
  //     });
  // setRenderToggle(!renderToggle);
  // } catch (err) {
  //   console.log(err);
  // }
  // };

  return (
    <div className='page'>
      <h2>My Favorites</h2>
      {/* <ul>
        {favorites.map((favorite) => {
          return (
            <Link key={favorite._id} to={`/todo/${favorite._id}`}>
              <li className="favorite-show-all">
                {favorite.title}
                <button
                  onClick={() => deleteTodo(favorite._id)}
                  className="delete-button"
                >
                  X
                </button>
              </li>
            </Link>
          );
        })}
      </ul> */}
    </div>
  );
}

export default Favorites;
