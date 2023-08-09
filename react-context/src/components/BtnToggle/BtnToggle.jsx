import React, { useContext, useState, useEffect } from "react";
import { FetchContext } from "../../context/FetchContext";
import { useParams } from "react-router-dom";

const BtnToggle = () => {
  // Utilisez le contexte FetchContext pour accéder aux données et fonctions de récupération
  const { userData } = useContext(FetchContext);

  // Utiliser `useParams` pour obtenir l'ID à partir de l'URL
  const { userId } = useParams();

  // Utilisez l'ID pour accéder aux données de l'utilisateur correspondant dans userData
  const selectedUserData = userData[parseInt(userId)];

  // Utilisez useState pour gérer l'ID de l'utilisateur actuellement sélectionné
  const [selectedUserId, setSelectedUserId] = useState(null);

  // Utilisez useEffect pour surveiller les changements de l'ID dans l'URL
  useEffect(() => {
    // Si l'ID est défini dans l'URL, mettez à jour l'ID de l'utilisateur sélectionné
    if (userId) {
      setSelectedUserId(parseInt(userId));
    } else {
      // Si aucun ID n'est spécifié dans l'URL, réinitialisez l'ID de l'utilisateur sélectionné à null
      setSelectedUserId(null);
    }
  }, [userId]);

  // Si aucun utilisateur n'est sélectionné (ID null), affichez "Choisir un utilisateur"
  if (selectedUserId === null) {
    return (
      <button className="btnUser">
        <li>Choisir un utilisateur</li>
      </button>
    );
  }

  // Sinon, affichez le prénom de l'utilisateur correspondant à l'ID sélectionné
  return (
    <button className="btnUser">
      <li>{selectedUserData?.data?.userInfos?.firstName}</li>
    </button>
  );
};

export default BtnToggle;
