import React from 'react';
import Card from './Card';
import './home.css';

function Home({ movieList }) {
  return (
    <div className='card-display-area'>
      {movieList.map(
        ({ id, title, overview, vote_average, popularity, poster_path }) => (
          <Card
            key={id}
            title={title}
            overview={overview}
            vote_average={vote_average}
            popularity={popularity}
            id={id}
            poster_path={poster_path}
          />
        )
      )}
    </div>
  );
}

export default Home;
