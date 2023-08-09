import React, { useContext } from "react";
import { FetchContext } from "../../context/FetchContext";
import Header from "../../components/Header/Header";
import SideBar from "../../components/Sidebar/SideBar";
import BtnUsers from "../../components/BtnToggle/BtnUsers";

const Home = () => {
  // const { userData } = useContext(FetchContext);
  // // console.log("Home donnée", userData);

  return (
    <>
      <Header />
      <SideBar />
      <BtnUsers />
    </>
  );
};

export default Home;
