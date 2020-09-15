import React, { useEffect } from 'react';
import './card.css';

//https://api.themoviedb.org/3/configuration?api_key=dff2ace9d4fe143fc9aad06522638b5c

const Card = ({
  title,
  overview,
  vote_average,
  popularity,
  id,
  poster_path,
}) => {
  // const [imageConfig, setImageConfig] = useState({});
  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/configuration?api_key=dff2ace9d4fe143fc9aad06522638b5c'
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className='card' onClick={() => console.log(id)}>
      {/* {console.log(imageConfig)} */}
      <h1>{title}</h1>
      <h3>{popularity}</h3>
      <h4>Average User Score: {vote_average}</h4>
      <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={title} />
      <p>
        {overview.substring(0, 40) +
          ' ... ' +
          ' Click the poster for more info!'}
      </p>
    </div>
  );
};

export default Card;
