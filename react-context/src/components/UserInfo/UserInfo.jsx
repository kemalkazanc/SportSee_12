import React, { useContext } from "react";
import { FetchContext } from "../../context/FetchContext";
import { useParams } from "react-router-dom";

const UserInfo = () => {
  const { userData } = useContext(FetchContext);

  // Utiliser `useParams` pour obtenir l'ID à partir de l'URL
  const { userId } = useParams();

  // Utilisez l'ID pour accéder aux données de l'utilisateur correspondant dans userData
  const selectedUserData = userData[parseInt(userId)];

  return (
    <section className="userInfo__section">
      <h2 className="userInfo__title">
        Bonjour
        <span className="userInfo__name">
          {" "}
          {selectedUserData?.data?.userInfos?.firstName}
        </span>
      </h2>
      <p className="userInfo__subtitle">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
    </section>
  );
};

export default UserInfo;
