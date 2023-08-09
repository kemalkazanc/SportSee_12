import React, { useContext } from "react";
import { FetchContext } from "../../../context/FetchContext";
import { useParams } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  YAxis,
  ResponsiveContainer,
  Rectangle,
} from "recharts";

const AverageChart = () => {
  const { userData } = useContext(FetchContext);
  const { userId } = useParams();
  const average = userData[parseInt(userId)]?.averageSessions.data?.sessions;
  console.log("average", average);

  const week = (value) => {
    if (value === 1) return "L";
    if (value === 2) return "M";
    if (value === 3) return "M";
    if (value === 4) return "J";
    if (value === 5) return "V";
    if (value === 6) return "S";
    if (value === 7) return "D";
    return value;
  };

  function CustomTooltip({ active, payload }) {
    if (active && payload && payload.length) {
      return (
        <div className="customTooltipLine">
          <p className="label">{`${payload[0].value}min`}</p>
        </div>
      );
    }
    return null;
  }

  function CustomizedCursor({ points }) {
    console.log("df", points);
    return (
      <Rectangle
        fill="black"
        opacity={0.1}
        x={points[0].x}
        width={1000}
        height={300}
      />
    );
  }

  if (average)
    return (
      <div className="card average">
        <h2 className="average__title">
          Durée moyenne des
          <br />
          sessions
        </h2>
        <ResponsiveContainer
          width="95%"
          height="70%"
          className={"average__responsiveContainerCharts"}
        >
          <LineChart data={average}>
            <Line
              type="natural"
              dataKey="sessionLength"
              stroke="url(#colorUv)"
              strokeWidth={2}
              activeDot={{
                stroke: "#FFF",
                strokeWidth: 4,
                r: 2,
              }}
              dot={false}
            />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "rgba(255,255,255,0.6)",
                fontSize: "0.75rem",
              }}
              tickFormatter={week}
              tickMargin={20}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={<CustomizedCursor />}
            />

            <YAxis hide domain={["dataMin-10", "dataMax+10"]} />
            <defs>
              <linearGradient id="colorUv" x1="0%" y1="0" x2="100%" y2="0">
                <stop offset="0%" stopColor="rgba(255, 255, 255, 0.3)" />
                <stop offset="20%" stopColor="rgba(255, 255, 255, 0.4)" />
                <stop offset="40%" stopColor="rgba(255, 255, 255, 0.5)" />
                <stop offset="60%" stopColor="rgba(255, 255, 255, 0.6)" />
                <stop offset="100%" stopColor="rgba(255, 255, 255, 1)" />
              </linearGradient>
            </defs>
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
};

export default AverageChart;