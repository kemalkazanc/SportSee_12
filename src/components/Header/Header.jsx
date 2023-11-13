import React from 'react';
import { NavLink } from 'react-router-dom';
import propTypes from 'prop-types';

/**
 * Header component
 * @prop {number} userId
 * @prop {func} setUserId
 * @prop {bool} mockedData
 * @prop {func} setMockedData
 * @returns {React.ReactComponentElement}
 */
function Header({ userId, setUserId, mockedData, setMockedData}) {
  function userToggle() {
    userId === 12 ? setUserId(18) : setUserId(12);
  }

  function dataToggle() {
    mockedData === true ? setMockedData(false) : setMockedData(true);
  }


  return (
    <header className="header">
      <nav>
        <img src="../assets/logo.svg" alt="logo" />
        <NavLink to="/" >
          Accueil
        </NavLink>
        <NavLink to={`/user/${userId}`} onClick={userToggle}>
          Profil
        </NavLink>
        <NavLink to={`/user/${userId}`} onClick={dataToggle}>
          Réglage
        </NavLink>
        <NavLink to="/">Communauté</NavLink>
      </nav>
    </header>
  );
}

Header.propTypes = {
  userId: propTypes.number,
  setUserId: propTypes.func,
  mockedData: propTypes.bool,
  setMockedData: propTypes.func,
};

export default Header;
