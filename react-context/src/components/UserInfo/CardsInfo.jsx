import React, { useContext } from "react";
import { FetchContext } from "../../context/FetchContext";
import { useParams } from "react-router-dom";
import apple from "../../assets/apple.svg";
import burger from "../../assets/cheeseburger.svg";
import chicken from "../../assets/chicken.svg";
import energy from "../../assets/energy.svg";

const CardsInfo = () => {
  const { userData } = useContext(FetchContext);
  const { userId } = useParams();

  // Si l'utilisateur avec l'ID spécifié existe dans userData, récupérer ses données
  const user = userData[parseInt(userId)]?.data.keyData;
  //console.log("toto", user);

  return (
    <aside className="userInfo__asideSection">
      {user && (
        <>
          <div className="userInfo__container">
            <div className="userInfo__icon">
              <img className="userInfo__img" src={energy} alt="icon de feu" />
            </div>
            <div className="userInfo__info">
              {user.calorieCount}kCal
              <p>Calories</p>
            </div>
          </div>
          <div className="userInfo__container">
            <div className="userInfo__icon">
              <img
                className="userInfo__img"
                src={chicken}
                alt="icon de proteines"
              />
            </div>
            <div className="userInfo__info">
              {user.proteinCount}g<p>Proteines</p>
            </div>
          </div>
          <div className="userInfo__container">
            <div className="userInfo__icon">
              <img
                className="userInfo__img"
                src={apple}
                alt="icon de glucides"
              />
            </div>
            <div className="userInfo__info">
              {user.carbohydrateCount}g<p>Glucides</p>
            </div>
          </div>
          <div className="userInfo__container">
            <div className="userInfo__icon">
              <img
                className="userInfo__img"
                src={burger}
                alt="icon de lipides"
              />
            </div>
            <div className="userInfo__info">
              {user.lipidCount}g<p>Lipides</p>
            </div>
          </div>
        </>
      )}
    </aside>
  );
};

export default CardsInfo;
