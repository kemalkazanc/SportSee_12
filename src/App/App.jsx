// Importation des modules React et React Router
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Importation des composants de pages et de la navigation
import Home from '../pages/Home/Home';
import ProfilPage from '../pages/ProfilPage/ProfilPage';
import Header from '../components/Header/Header';
import Aside from '../components/Aside/Aside';

// Définition du composant principal App
const App = () => {
  // Déclaration des états locaux userId et mockedData avec la fonction set
  const [userId, setUserId] = useState(12);
  const [mockedData, setMockedData] = useState(false);

  return (
    <div className="app">
      <BrowserRouter>
        <Header
          userId={userId}
          setUserId={setUserId}
          mockedData={mockedData}
          setMockedData={setMockedData}
        />
        <Aside />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/user/:userId"
            element={<ProfilPage mockedData={mockedData} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
