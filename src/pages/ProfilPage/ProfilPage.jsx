import React from 'react';
import Main from '../../components/Main/Main';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * Page de profil utilisateur
 *
 * @param {boolean} mockedData - Indique si les données doivent être simulées
 * @returns {React.ReactComponentElement} - Élément React représentant la page de profil
 */
function ProfilPage({ mockedData }) {
  // Utilise useParams pour extraire l'identifiant d'utilisateur de l'URL
  let { userId } = useParams();

  return (
    <div className="profilPage">
      {/* Rend le composant Main avec les données extraites de l'URL et la propriété mockedData */}
      <Main userId={parseInt(userId)} mockedData={mockedData} />
    </div>
  );
}

// Spécifie les types des propriétés attendues avec PropTypes
ProfilPage.propTypes = {
  mockedData: PropTypes.bool,
};

// Exporte le composant ProfilPage en tant que composant par défaut
export default ProfilPage;
