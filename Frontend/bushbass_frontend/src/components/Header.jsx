import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';
import netflixN from './netflixN.png';
import netflixNoN from './netflixLogo-noN.png';
function Header() {
  return (
    <header>
      <img className='netflixN netflix' src={netflixN} alt='' />
      <img className='netflix' src={netflixNoN} alt='' /> *
      <h1>Find your favorite movies</h1>
      <p className='not-netflix'>
        **Totally not a ripoff of Netflix, in fact we've never even heard of
        Netlfix
      </p>{' '}
      <nav>
        <div className='nav-item'>
          <Link to='/'>Home</Link>
        </div>
        <div className='search'>
          <Link to='/search'>Search</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
