import React, { useContext } from "react";
import { FetchContext } from "../../context/FetchContext";

import ComingSoon from "../../components/ComingSoon/ComingSoon";
import Header from "../../components/Header/Header";
import SideBar from "../../components/Sidebar/SideBar";

const Settings = () => {
  const { userData } = useContext(FetchContext);
  console.log("info données", userData);

  return (
    <section>
      <Header />
      <SideBar />
      <div>
        <ComingSoon />
      </div>
    </section>
  );
};

export default Settings;
