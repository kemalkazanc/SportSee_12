import React from 'react';
import { NavLink } from 'react-router-dom';

function Aside() {
  const images = ['iconYoga', 'iconSwimming', 'iconBike', 'iconHaltere'];

  return (
    <aside>
      <div className="navContainer">
        <nav>
          {images.map((image, index) => (
            <NavLink key={index} to="/">
              <img src={`../assets/${image}.svg`} alt={image} />
            </NavLink>
          ))}
        </nav>
      </div>
      <p>Copiryght, SportSee 2020</p>
    </aside>
  );
}

export default Aside;
