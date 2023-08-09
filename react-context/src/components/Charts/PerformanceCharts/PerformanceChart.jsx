import React, { useContext } from "react";
import { FetchContext } from "../../../context/FetchContext";
import { useParams } from "react-router-dom";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

const PerformanceChart = () => {
  const { userData } = useContext(FetchContext);
  const { userId } = useParams();
  const score = userData[parseInt(userId)]?.data;

  const scoreToday = userData[parseInt(userId)]?.data.todayScore
    ? userData[parseInt(userId)]?.data.todayScore
    : userData[parseInt(userId)]?.data.score;
  const dataArray = [{ name: "score", value: scoreToday }];
  console.log("important", dataArray);

  console.log("score du jour", scoreToday);
  return (
    <div className="card performance">
      <h2 className="performance__title">Score</h2>

      <ResponsiveContainer width="70%" height="70%" className={"center"}>
        <RadialBarChart
          innerRadius="0%"
          outerRadius="0%"
          data={dataArray}
          startAngle={90}
          endAngle={450}
        >
          <RadialBar
            data={[{ value: 1 }]}
            dataKey="value"
            barSize={170}
            fill="#FFF"
            isAnimationActive={false}
          />
          <RadialBar
            dataKey="value"
            barSize={10}
            cornerRadius={100}
            fill="#FF0000"
          />
        </RadialBarChart>
      </ResponsiveContainer>
      <div className="chartgoal-label center">
        <p className="percent">
          {userData[parseInt(userId)]?.data.score &&
            userData[parseInt(userId)]?.data.score * 100}
          {userData[parseInt(userId)]?.data.todayScore &&
            userData[parseInt(userId)]?.data.todayScore * 100}
          %
        </p>
        <p>de votre</p>
        <p>objectif</p>
      </div>
    </div>
  );
};

export default PerformanceChart;
