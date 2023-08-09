import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import BtnToggle from "../BtnToggle/BtnToggle";

const Header = () => {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="logo SportSee" />
      <nav className="header__navigation">
        <NavLink to="/" className="header__navLink">
          Accueil
        </NavLink>
        <NavLink to="/profil" className="header__navLink">
          Profil
        </NavLink>
        <NavLink to="/settings" className="header__navLink">
          Réglage
        </NavLink>
        <NavLink to="/community" className="header__navLink">
          Communauté
        </NavLink>
        <NavLink className="header__navLink">
          <BtnToggle />
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
