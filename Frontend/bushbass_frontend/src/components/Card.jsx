import Axios from 'axios';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../context/UserContext';

import './card.css';

const Card = ({
  title,
  overview,
  vote_average,
  popularity,
  id,
  poster_path,
}) => {
  const { BACKEND_URL, userData } = useContext(UserContext);

  const addFavorite = async (id) => {
    try {
      const addFavoriteResponse = await Axios.post(`${BACKEND_URL}/favorites`, {
        movieId: id,
      });
      console.log(addFavoriteResponse);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='card'>
      <Link to={`/${id}`}>
        <h1>{title}</h1>
        <h3>{popularity}</h3>
        <h4>Average User Score: {vote_average}</h4>
        <img
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt={title}
        />
        <p>{overview.substring(0, 50) + ' ... click for more '}</p>
      </Link>
      <button onClick={() => addFavorite(id)}>Add to favorites</button>
    </div>
  );
};

export default Card;
