import React, { useContext, useMemo } from "react";
import { FetchContext } from "../../../context/FetchContext";
import { useParams } from "react-router-dom";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
  PolarRadiusAxis,
  Legend,
} from "recharts";

const RadarChartComponent = () => {
  const { userData } = useContext(FetchContext);
  const { userId } = useParams();

  const sport = userData[parseInt(userId)]?.performance.data?.data;
  const kind = userData[parseInt(userId)]?.performance.data?.kind;

  // Tableau pour mapper les valeurs de kind
  const kindMap = useMemo(
    () => ({
      1: "Cardio",
      2: "Energy",
      3: "Endurance",
      4: "Strength",
      5: "Speed",
      6: "Intensity",
    }),
    []
  );

  // Modifier les valeurs de kind
  const modifiedSport = useMemo(() => {
    if (sport) {
      return sport.map((data) => ({
        ...data,
        kind: kindMap[data.kind],
      }));
    }
    return [];
  }, [sport, kindMap]);

  console.log("sport avec kind modifié", modifiedSport);

  if (modifiedSport.length > 0) {
    return (
      <div className="card radar">
        <ResponsiveContainer width="100%" height={250}>
          <RadarChart cx="50%" cy="50%" outerRadius={75} data={modifiedSport}>
            <PolarGrid />
            <PolarAngleAxis dataKey="kind" />
            <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} />
            <Radar
              name="kemal"
              dataKey="value"
              stroke="#FF0101"
              fill="#FF0101"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    );
  } else {
    return null;
  }
};

export default RadarChartComponent;
