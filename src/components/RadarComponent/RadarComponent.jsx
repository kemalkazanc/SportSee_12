import React from 'react';
import Loader from '../Loader/Loader';

import {
  Radar,
  RadarChart,
  ResponsiveContainer,
  PolarAngleAxis,
  PolarGrid,
} from 'recharts';

import propTypes from 'prop-types';

/**
 * Radar component
 * @prop {object} userPerformanceData
 * @return {React.ReactComponentElement}
 */
const RadarComponent = ({
  userPerformanceData,
  isUserPerformanceDataLoading,
}) => {
  return isUserPerformanceDataLoading ? (
    <div className="radar">
      <Loader />
    </div>
  ) : (
    <div className="radar">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={userPerformanceData} outerRadius={90}>
          <Radar dataKey="value" fill="red" opacity={0.8} />
          <PolarGrid radialLines={false} polarRadius={[10, 20, 40, 65, 90]} />
          <PolarAngleAxis
            dataKey="kind"
            tick={{ fill: 'white', fontSize: '12', dy: 0 }}
            radius={150}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

RadarComponent.propTypes = {
  userPerformanceData: propTypes.arrayOf(
    propTypes.exact({
      value: propTypes.number,
      kind: propTypes.string,
    })
  ),
};

export default RadarComponent;
