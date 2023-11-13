// Format des données de performance
/**
 * Formate les données de performance en ajoutant des types de performance en français.
 *
 * @param   {object}  data  Données de performance
 *
 * @return  {array}         Données de performance formatées
 */
function formatPerformanceData(data) {
  // Traduction française des types de performance
  const frenchTranslation = [
    'Cardio',
    'Energie',
    'Endurance',
    'Force',
    'Vitesse',
    'Intensité',
  ];

  // Ajoute les types de performance à la propriété kind de l'objet data
  for (let i = 0; i < frenchTranslation.length; i++) {
    data.kind[i + 1] = frenchTranslation[i];
  }

  // Associe chaque élément de data.data à un type de performance
  data.data.forEach((el, index) => (el.kind = data.kind[index + 1]));

  // Inverse l'ordre des données
  data.data.reverse();

  // Retourne les données de performance formatées
  return data.data;
}

// Format des données moyennes
/**
 * Ajoute des sessions fictives au début et à la fin du tableau sessions.
 *
 * @param   {object}  data  Données moyennes
 *
 * @return  {array}         Sessions moyennes mises à jour
 */
function addDaysAverageSessions(data) {
  const { sessions } = data;

  // Supprime le premier et le dernier élément s'il n'y a pas exactement 7 éléments
  if (data.sessions.length !== 7) {
    data.sessions.shift();
    data.sessions.pop();
  }

  // Ajoute des sessions fictives au début et à la fin du tableau sessions
  sessions.unshift({
    day: '',
    sessionLength: 15,
  });
  sessions.push({
    day: '',
    sessionLength: 15,
  });

  // Retourne les sessions moyennes mises à jour
  return sessions;
}

// Format des jours de la semaine pour les sessions moyennes
/**
 * Ajoute des jours de la semaine (lettre) à chaque session moyenne.
 *
 * @param   {array}  sessions  Sessions moyennes
 *
 * @return  {array}            Sessions moyennes formatées
 */
function formatAverageSessionDate(sessions) {
  // Jours de la semaine (lettre)
  const weekDay = ['', 'L', 'M', 'M', 'J', 'V', 'S', 'D', ''];

  // Associe chaque session à un jour de la semaine
  for (let i = 0; i < weekDay.length; i++) {
    sessions[i].day = weekDay[i];
  }

  // Retourne les sessions moyennes formatées
  return sessions;
}

// Format des dates des sessions d'activité
/**
 * Reformate la date des sessions d'activité en utilisant uniquement le numéro du jour.
 *
 * @param   {object}  data  Données d'activité
 *
 * @return  {array}         Sessions d'activité formatées
 */
function formatActivityDate(data) {
  const { sessions } = data;

  // Reformate la date des sessions d'activité
  sessions.forEach((session) => {
    let result = session.day.substring(
      session.day.length - 2,
      session.day.length
    );
    session.day = result[0] === '0' ? result[1] : result;
  });
  // Retourne les sessions d'activité formatées
  return sessions;
}

// Format des données utilisateur
/**
 * Renomme la propriété todayScore en score (si elle existe).
 *
 * @param   {object}  data  Données utilisateur
 *
 * @return  {object}        Données utilisateur formatées
 */
function formatTodayScoreAttribute(data) {
  // Si la propriété todayScore existe, la renomme en score et supprime todayScore
  if (data.todayScore) {
    data.score = data.todayScore;
    delete data.todayScore;
  }

  // Retourne les données utilisateur formatées
  return data;
}

/**
 * Met à l'échelle le score en pourcentage si celui-ci est inférieur à 1.
 *
 * @param   {object}  data  Données utilisateur
 *
 * @return  {object}        Données utilisateur formatées
 */
function formatScore(data) {
  data.score < 1 && (data.score = data.score * 100);

  // Retourne les données utilisateur formatées
  return data;
}

// Exporte toutes les fonctions pour les rendre disponibles pour d'autres modules
export {
  formatPerformanceData,
  addDaysAverageSessions,
  formatAverageSessionDate,
  formatActivityDate,
  formatTodayScoreAttribute,
  formatScore,
};
