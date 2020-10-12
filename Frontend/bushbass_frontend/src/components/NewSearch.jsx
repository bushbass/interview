import React, { useState, useEffect, useContext } from 'react';
import UserContext from '../context/UserContext';
import { useHistory, Link } from 'react-router-dom';
import './favorites.css';
function Favorites() {
  const [inputText, setInputText] = useState('');
  const { userData } = useContext(UserContext);
  const [searchResults, setSearchResults] = useState([]);
  const history = useHistory();

  const submitForm = (e) => {
    e.preventDefault();
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=dff2ace9d4fe143fc9aad06522638b5c&language=en-US&query=${inputText}&page=1&include_adult=false`
    ).then((res) => res.json().then((data) => setSearchResults(data.results)));
  };
  useEffect(() => {
    if (!userData.user) history.push('/login');
  });

  return (
    <div className='page'>
      <h2> New search</h2>
      <form onSubmit={submitForm}>
        <input
          type='text'
          value={inputText}
          onChange={(Event) => setInputText(Event.target.value)}
        />
        <button>submit</button>
      </form>

      {searchResults.map((movie) => console.log(movie))}
      {searchResults.map((movie) => (
        <div>
          <Link to={`/${movie.id}`}>
            {' '}
            {movie.original_title} - {movie.id}
          </Link>{' '}
        </div>
      ))}
    </div>
  );
}

export default Favorites;
