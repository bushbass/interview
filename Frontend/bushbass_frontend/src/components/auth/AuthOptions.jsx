import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../context/UserContext';

function AuthOptions() {
  const { userData, setUserData } = useContext(UserContext);

  const history = useHistory();

  const register = () => history.push('/register');
  const search = () => history.push('/search');
  const login = () => history.push('/login');
  const home = () => history.push('/');
  const favorites = () => history.push('/favorites');
  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem('auth-token', '');
  };

  return (
    <>
      {userData.user ? (
        <>
          <span className='nav-current-user'>
            Current User - {userData.user.displayName}
          </span>

          <div className='navLink' onClick={home}>
            Home
          </div>
          <div className='navLink' onClick={search}>
            search
          </div>
          <div className='navLink' onClick={favorites}>
            Show favorites
          </div>
          <div className='navLink' onClick={logout}>
            Log out
          </div>
        </>
      ) : (
        <>
          <div className='navLink' onClick={home}>
            Home
          </div>
          <div className='navLink' onClick={search}>
            Search
          </div>
          <div className='navLink' onClick={register}>
            Register
          </div>
          <div className='navLink' onClick={login}>
            Login
          </div>
        </>
      )}
    </>
  );
}

export default AuthOptions;
