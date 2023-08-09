import React, { useContext, PureComponent } from "react";
import { FetchContext } from "../../context/FetchContext";
import {
  Label,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceArea,
  ResponsiveContainer,
} from "recharts";

const AverageChart = () => {
  // const { userData } = useContext(FetchContext);
  // console.log(userData);
  return (
    <div className="card average">
      <h2 className="average__title">Durée moyenne des sessions</h2>
    </div>
  );
};

export default AverageChart;
