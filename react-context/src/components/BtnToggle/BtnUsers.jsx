import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FetchContext } from "../../context/FetchContext";

const BtnUsers = () => {
  const { userData } = useContext(FetchContext);
  // console.log("données total", userData);
  return (
    <>
      <div className="btn__container">
        {/* Génération dynamique des boutons pour chaque utilisateur */}
        {Object.keys(userData).map((userId) => (
          <Link key={userId} to={`/profil/${userId}`}>
            <button className="btn__Select">
              <span>
                {userData[userId]?.firstName} {userData[userId]?.lastName}
              </span>
            </button>
          </Link>
        ))}
      </div>
    </>
  );
};

export default BtnUsers;
