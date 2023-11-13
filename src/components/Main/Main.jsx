import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import Error from '../Error/Error';
import MainHeader from '../MainHeader/MainHeader';
import MainSection from '../MainSection/MainSection';
import {
  getUserData,
  getActivity,
  getAverageSession,
  getUserPerformance,
} from '../../services/dataManager';

/**
 *
 * @param {number} userId
 * @param {string} mockedData
 * @returns {React.ReactComponentElement}
 */
function Main({ userId, mockedData }) {
  // États pour gérer les données et le chargement
  const [isUserDataLoading, setIsUserDataLoading] = useState(false);
  const [isActivityDataLoading, setIsActivityDataLoading] = useState(false);
  const [isAverageSessionDataLoading, setIsAverageSessionDataLoading] =
    useState(false);
  const [isUserPerformanceDataLoading, setIsUserPerformanceDataLoading] =
    useState(false);
  const [isError, setIsError] = useState(false);

  // États pour stocker les données utilisateur
  const [userData, setUserData] = useState({
    id: 0,
    keyData: {},
    score: 0,
    userInfos: {
      firstName: '',
      lastName: '',
      age: 0,
    },
    fill: '',
  });

  const [activityData, setActivityData] = useState([]); // Données activité
  const [averageSessionData, setAverageSessionData] = useState([]); // Données sessions
  const [userPerformanceData, setUserPerformanceData] = useState([]); // Données de performance

  // Effet secondaire pour charger les données utilisateur lors du montage du composant
  useEffect(() => {
    // Activation des indicateurs de chargement
    setIsUserDataLoading(true);
    setIsActivityDataLoading(true);
    setIsAverageSessionDataLoading(true);
    setIsUserPerformanceDataLoading(true);

    // Chargement des données utilisateur
    getUserData(userId, mockedData)
      .then((data) => setUserData(data))
      .then((_userData) => {
        // Désactivation de l'indicateur de chargement et aucune erreur
        setIsUserDataLoading(false);
        setIsError(false);
      })
      .catch((_error) => setIsError(true));

    // Chargement des données d'activité
    getActivity(userId, mockedData)
      .then((data) => setActivityData(data))
      .then((_activityData) => setIsActivityDataLoading(false));

    // Chargement des données de sessions moyennes
    getAverageSession(userId, mockedData)
      .then((data) => setAverageSessionData(data))
      .then((_averageSessionData) => setIsAverageSessionDataLoading(false));

    // Chargement des données de performance
    getUserPerformance(userId, mockedData)
      .then((data) => setUserPerformanceData(data))
      .then((_userPerformanceData) => setIsUserPerformanceDataLoading(false));
  }, [mockedData, userId]);

  // Attribut de remplissage de la couleur pour les données utilisateur
  userData.fill = 'red';

  // Fonction pour gérer l'affichage des données simulées ou réelles
  function mockedDataManager() {
    if (mockedData) {
      return <p className="green">Data Mocked</p>;
    }
    return <p className="red">Data Not Mocked</p>;
  }

  // Rendu conditionnel en cas d'erreur de chargement des données
  return isError ? (
    <main className="mainContainer">
      {mockedDataManager()}
      <Error />
    </main>
  ) : (
    // Rendu de la section principale avec les données utilisateur
    <main className="mainContainer">
      {mockedDataManager()}
      <MainHeader
        firstName={userData.userInfos.firstName}
        isUserDataLoading={isUserDataLoading}
      />
      <MainSection
        userData={userData}
        isUserDataLoading={isUserDataLoading}
        activityData={activityData}
        isActivityDataLoading={isActivityDataLoading}
        averageSessionData={averageSessionData}
        isAverageSessionDataLoading={isAverageSessionDataLoading}
        userPerformanceData={userPerformanceData}
        isUserPerformanceDataLoading={isUserPerformanceDataLoading}
      />
    </main>
  );
}

// Spécification des types de propriétés attendues
Main.propTypes = {
  userId: propTypes.number,
  mockedData: propTypes.bool,
};

// Exportation du composant principal
export default Main;
