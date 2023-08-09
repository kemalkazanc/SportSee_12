import React, { useContext } from "react";
import { FetchContext } from "../../../context/FetchContext";
import { useParams } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ActivityCharts = () => {
  const { userData } = useContext(FetchContext);
  const { userId } = useParams();

  // Si l'utilisateur avec l'ID spécifié existe dans userData, récupérer ses données
  const activity = userData[parseInt(userId)]?.activity.data?.sessions;
  // console.log(day, kilo, calories, "activityChart");
  // console.log(activity, "act");

  function CustomTooltip({ active, payload }) {
    if (active && payload && payload.length) {
      return (
        <div className="customTooltip">
          <p className="label">{`${payload[0].value} Kg`}</p>
          <p className="label">{`${payload[1].value} Kcal`}</p>
        </div>
      );
    }
    return null;
  }

  if (activity)
    return (
      <>
        <div className="activityCharts__informationCharts">
          <h3 className="activityCharts__title">Activité quotidienne</h3>
          <div className="activityCharts__chartsBar">
            <ResponsiveContainer height={260} width="100%">
              <BarChart data={activity} barSize={7} barGap={8}>
                <CartesianGrid strokeDasharray="3" vertical={false} />
                <XAxis
                  dataKey="day"
                  tick={{ fill: "#9B9EAC" }}
                  tickLine={false}
                  stroke="#DEDEDE"
                  strokeWidth={2}
                  tickMargin={16}
                  tickFormatter={(day) => new Date(day).getDate()}
                />
                <YAxis
                  yAxisId="kilogram"
                  orientation="right"
                  tickMargin={30}
                  tick={{ fill: "#9B9EAC" }}
                  tickLine={false}
                  axisLine={false}
                  domain={["dataMin-2", "dataMax+1"]}
                  tickCount={3}
                />
                <YAxis yAxisId="calories" dataKey="calories" hide={true} />
                <Bar
                  name="Poids (kg)"
                  dataKey="kilogram"
                  yAxisId="kilogram"
                  fill="#282D30"
                  radius={[3, 3, 0, 0]}
                />
                <Bar
                  name="Calories brûlées (kCal)"
                  dataKey="calories"
                  yAxisId="calories"
                  fill="#E60000"
                  radius={[3, 3, 0, 0]}
                />
                <Legend
                  verticalAlign="top"
                  align="right"
                  iconType="circle"
                  iconSize="10"
                  height={90}
                />
                <Tooltip
                  cursor={{ opacity: 0.6 }}
                  content={<CustomTooltip />}
                  fill="#E6eeee"
                  offset={21}
                  wrapperStyle={{ outlineStyle: "none" }}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </>
    );
};

export default ActivityCharts;
