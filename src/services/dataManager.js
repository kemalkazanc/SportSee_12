// Importe les données statiques et les fonctions de formatage
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from '../data/data';

import {
  formatPerformanceData,
  addDaysAverageSessions,
  formatAverageSessionDate,
  formatActivityDate,
  formatTodayScoreAttribute,
  formatScore,
} from './dataFormatter';

// Lorsque l'application effectue des requêtes vers l'API, elle utilise cette URL comme base pour construire les différentes URL
const server = 'https://server-p12.vercel.app/';

// Fonction pour récupérer les données de performance de l'utilisateur
async function getUserPerformance(userId, mockedData) {
  // Si les données sont simulées, utilise les données statiques, sinon, appelle l'API
  if (mockedData)
    return formatPerformanceData(findInData(USER_PERFORMANCE, userId));
  return getFromApi('user/' + userId + '/performance').then((data) =>
    formatPerformanceData(data)
  );
}

// Fonction pour récupérer les données de sessions moyennes de l'utilisateur
async function getAverageSession(userId, mockedData) {
  // Si les données sont simulées, utilise les données statiques, sinon, appelle l'API
  if (mockedData)
    return formatAverageSessionDate(
      addDaysAverageSessions(findInData(USER_AVERAGE_SESSIONS, userId))
    );
  return getFromApi('user/' + userId + '/average-sessions')
    .then((data) => addDaysAverageSessions(data))
    .then((sessions) => formatAverageSessionDate(sessions));
}

// Fonction pour récupérer les données d'activité de l'utilisateur
async function getActivity(userId, mockedData) {
  // Si les données sont simulées, utilise les données statiques, sinon, appelle l'API
  if (mockedData) return formatActivityDate(findInData(USER_ACTIVITY, userId));
  return getFromApi('user/' + userId + '/activity').then((data) =>
    formatActivityDate(data)
  );
}

// Fonction pour récupérer les données principales de l'utilisateur
async function getUserData(userId, mockedData) {
  // Si les données sont simulées, utilise les données statiques, sinon, appelle l'API
  if (mockedData)
    return formatScore(
      formatTodayScoreAttribute(findInData(USER_MAIN_DATA, userId))
    );
  return getFromApi('user/' + userId).then((data) =>
    formatScore(formatTodayScoreAttribute(data))
  );
}

// Fonction pour trouver des données spécifiques dans un ensemble de données simulées
function findInData(usersData, userId) {
  for (const value of usersData) {
    if (value.userId === userId || value.id === userId) {
      return value;
    }
  }
}

// Fonction FETCH pour appeler l'API et récupérer les données
async function getFromApi(uri) {
  const response = await (await fetch(server + uri)).json();
  return response.data;
}

// Exporte les fonctions pour les rendre disponibles pour d'autres modules
export { getUserData, getActivity, getAverageSession, getUserPerformance };
