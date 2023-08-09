// Profil.js
import React, { useContext, useEffect } from "react";
import { FetchContext } from "../../context/FetchContext";
import Header from "../../components/Header/Header";
import SideBar from "../../components/Sidebar/SideBar";
import UserInfo from "../../components/UserInfo/UserInfo";
import CardsInfo from "../../components/UserInfo/CardsInfo";
import ActivityCharts from "../../components/Charts/ActivityCharts/ActivityCharts";
import AverageChart from "../../components/Charts/LineCharts/AverageChart";
import RadarChart from "../../components/Charts/RadarCharts/RadarCharts";
import PerformanceChart from "../../components/Charts/PerformanceCharts/PerformanceChart";
import { useParams } from "react-router-dom";

const Profil = () => {
  const { userData } = useContext(FetchContext);
  const { userId } = useParams();

  return (
    <>
      <Header className="profil__header" />
      <SideBar className="profil__sidebar" />

      <UserInfo />
      <main className="profil__wrapper">
        <section className="profil__wrapperContainer">
          <section className="profil__activityCharts">
            <ActivityCharts />
          </section>
          <section className="profil__littleChart">
            <AverageChart />
            <RadarChart />
            <PerformanceChart />
          </section>
        </section>
        <CardsInfo />
      </main>
    </>
  );
};

export default Profil;
