import React from "react";
import FetchContextProvider from "./context/FetchContext.js";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";

import Home from "../src/pages/Home/Home.jsx";
import Profil from "./pages/Profil/Profil.jsx";
import Settings from "../src/pages/Settings/Settings.jsx";
import Community from "../src/pages/Community/Community.jsx";

function App() {
  return (
    <FetchContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profil/:userId" element={<Profil />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/community" element={<Community />} />
        </Routes>
      </BrowserRouter>
    </FetchContextProvider>
  );
}

export default App;
