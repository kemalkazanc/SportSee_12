import React from 'react';
import propTypes from 'prop-types';
import Loader from '../Loader/Loader';
/**
 * Component HeaderMain
 * @prop {string} firstName
 * @prop {boolean} isUserDataLoading
 * @returns  {React.ReactElement}
 */
function MainHeader({ firstName, isUserDataLoading }) {
  return isUserDataLoading ? (
    <header className="mainHeader">
      <Loader />
    </header>
  ) : (
    <header className="mainHeader">
      <h2>
        Bonjour <span>{firstName}</span>
      </h2>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </header>
  );
}

MainHeader.propTypes = {
  firstName: propTypes.string,
  isUserDataLoading: propTypes.bool,
};

export default MainHeader;
