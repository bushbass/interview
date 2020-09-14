import React, { useState, useEffect } from 'react';
import Card from './Card';
import './home.css';

const Search = ({ movieList }) => {
  const [inputText, setInputText] = useState('');
  const [filteredList, setFilteredList] = useState([]);

  useEffect(
    () =>
      setFilteredList(
        movieList.filter((movie) => movie.title.includes(inputText))
      ),
    [movieList, inputText]
  );

  return (
    <main>
      {console.log(filteredList.map((movie) => movie.title))}
      <h2>search goes here</h2>
      <input
        type='text'
        value={inputText}
        onChange={(Event) => setInputText(Event.target.value)}
      />
      <div className='card-display-area'>
        {filteredList.map(
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
    </main>
  );
};
export default Search;
