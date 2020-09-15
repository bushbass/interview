import React from 'react';
import { Link } from 'react-router-dom';
import './card.css';

const Card = ({
  title,
  overview,
  vote_average,
  popularity,
  id,
  poster_path,
}) => {
  return (
    // <div className='card' onClick={() => console.log(id)}>
    <div className='card'>
      <Link to={`/${id}`}>
        <h1>{title}</h1>
        <h3>{popularity}</h3>
        <h4>Average User Score: {vote_average}</h4>
        <img
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt={title}
        />
        <p>
          {overview.substring(0, 40) +
            ' ... ' +
            ' Click the poster for more info!'}
        </p>
      </Link>
    </div>
  );
};

export default Card;
