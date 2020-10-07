import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";

function AuthOptions() {
  const { userData, setUserData } = useContext(UserContext);

  const history = useHistory();

  const register = () => history.push("/register");
  const search = () => history.push("/search");
  const login = () => history.push("/login");
  const home = () => history.push("/");
  const favorites = () => history.push("/favorites");
  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined
    });
    localStorage.setItem("auth-token", "");
  };

  return (
    <nav>
      {userData.user ? (
        <>
          <span className="nav-current-user">
            Current User - {userData.user.displayName}
          </span>

          <button onClick={home}>Home</button>
          <button onClick={search}>search</button>
          <button onClick={favorites}>Show favorites</button>
          <button onClick={logout}>Log out</button>
        </>
      ) : (
        <>
          <button onClick={home}>Home</button>
          <button onClick={search}>Search</button>
          <button onClick={register}>Register</button>
          <button onClick={login}>Login</button>
        </>
      )}
    </nav>
  );
}

export default AuthOptions;
