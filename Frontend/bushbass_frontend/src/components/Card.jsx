import React from 'react';
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
    <div className='card' onClick={() => console.log(id)}>
      <h1>{title}</h1>
      <h3>{popularity}</h3>
      <h4>Average User Score: {vote_average}</h4>
      <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={title} />
      <p>{overview}</p>
    </div>
  );
};

export default Card;
