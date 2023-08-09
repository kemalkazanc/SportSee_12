// FetchContext.js
import React, { createContext, useEffect, useState } from "react";

// Créer un contexte pour partager les données fetchées entre les composants
export const FetchContext = createContext();

const FetchContextProvider = (props) => {
  // État pour stocker les données fetchées
  const [userData, setUserData] = useState({});
  const useMockedData = false;

  // Fonction pour récupérer les données d'un utilisateur en fonction de son ID
  const fetchUserData = async (userId) => {
    try {
      // Construire l'URL en fonction de l'ID de l'utilisateur
      let url = "";
      if (useMockedData) {
        url = `./mocked-data/user${userId}`;
      } else {
        url = `http://localhost:3000/user/${userId}`;
      }

      // Faire l'appel fetch pour récupérer les données de l'utilisateur
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Erreur de réseau - Statut : " + response.status);
      }

      // Analyser la réponse JSON
      const userData = await response.json();

      // Retourner les données de l'utilisateur
      return userData;
    } catch (error) {
      console.error("Erreur lors de la récupération des données :", error);
      throw error;
    }
  };

  // Fonction pour récupérer les données d'activité d'un utilisateur en fonction de son ID
  const fetchUserActivity = async (userId) => {
    try {
      // Construire l'URL en fonction de l'ID de l'utilisateur
      let url = "";
      if (useMockedData) {
        url = `./mocked-data/user${userId}/activity`;
      } else {
        url = `http://localhost:3000/user/${userId}/activity`;
      }

      // Faire l'appel fetch pour récupérer les données d'activité de l'utilisateur
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Erreur de réseau - Statut : " + response.status);
      }

      // Analyser la réponse JSON
      const userActivityData = await response.json();

      // Retourner les données d'activité de l'utilisateur
      return userActivityData;
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des données d'activité :",
        error
      );
      throw error;
    }
  };

  // Fonction pour récupérer les données de sessions moyennes d'un utilisateur en fonction de son ID
  const fetchUserAverageSessions = async (userId) => {
    try {
      // Construire l'URL en fonction de l'ID de l'utilisateur
      let url = "";
      if (useMockedData) {
        url = `./mocked-data/user${userId}/average-sessions`;
      } else {
        url = `http://localhost:3000/user/${userId}/average-sessions`;
      }

      // Faire l'appel fetch pour récupérer les données de sessions moyennes de l'utilisateur
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Erreur de réseau - Statut : " + response.status);
      }

      // Analyser la réponse JSON
      const userAverageSessionsData = await response.json();

      // Retourner les données de sessions moyennes de l'utilisateur
      return userAverageSessionsData;
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des données de sessions moyennes :",
        error
      );
      throw error;
    }
  };

  // Fonction pour récupérer les performances d'un utilisateur en fonction de son ID
  const fetchUserPerformance = async (userId) => {
    try {
      // Construire l'URL en fonction de l'ID de l'utilisateur
      let url = "";
      if (useMockedData) {
        url = `./mocked-data/user${userId}/performance`;
      } else {
        url = `http://localhost:3000/user/${userId}/performance`;
      }

      // Faire l'appel fetch pour récupérer les données de performances de l'utilisateur
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Erreur de réseau - Statut : " + response.status);
      }

      // Analyser la réponse JSON
      const userPerformanceData = await response.json();

      // Retourner les données de performances de l'utilisateur
      return userPerformanceData;
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des données de performances :",
        error
      );
      throw error;
    }
  };

  // Effet au chargement du composant pour récupérer les données des utilisateurs
  useEffect(() => {
    // Fonction asynchrone pour récupérer les données pour un utilisateur donné
    const fetchDataForUser = async (userId) => {
      try {
        // Appel fetch pour récupérer les données de l'utilisateur avec l'ID donné
        const userData = await fetchUserData(userId);

        // Appel fetch pour récupérer les données d'activité de l'utilisateur
        const userActivityData = await fetchUserActivity(userId);

        // Appel fetch pour récupérer les données de sessions moyennes de l'utilisateur
        const userAverageSessionsData = await fetchUserAverageSessions(userId);

        // Appel fetch pour récupérer les données de performances de l'utilisateur
        const userPerformanceData = await fetchUserPerformance(userId);

        // Mise à jour de l'état userData avec toutes les données pour l'utilisateur
        setUserData((prevUserData) => ({
          ...prevUserData,
          [userId]: {
            ...userData,
            activity: userActivityData,
            averageSessions: userAverageSessionsData,
            performance: userPerformanceData,
          },
        }));
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données pour l'utilisateur " +
            userId,
          error
        );
      }
    };

    // Appel fetch pour récupérer les données de l'utilisateur 1 avec l'ID 18
    fetchDataForUser(18);

    // Appel fetch pour récupérer les données de l'utilisateur 2 avec l'ID 12
    fetchDataForUser(12);
  }, []);

  return (
    <FetchContext.Provider
      value={{
        userData,
        fetchUserActivity,
        fetchUserAverageSessions,
        fetchUserPerformance,
      }}
    >
      {props.children}
    </FetchContext.Provider>
  );
};

export default FetchContextProvider;
