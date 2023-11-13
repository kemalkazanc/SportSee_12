import React from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';
import propTypes from 'prop-types';
import Loader from '../Loader/Loader';

/**
 * Kpi component (Key Performance Indicator)
 * @prop {object} userData
 * @prop {boolean} isUserDataLoading
 * @returns {React.ReactComponentElement}
 */
function Kpi({ userData, isUserDataLoading }) {
  const scoreMax = {
    score: 100,
    fill: 'transparent',
  };
  return isUserDataLoading ? (
    <div className="kpi">
      <Loader />
    </div>
  ) : (
    <div className="kpi">
      <h2>Score</h2>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          width={256}
          height={256}
          cx="50%"
          cy="50%"
          innerRadius={50}
          outerRadius={100}
          barSize={10}
          data={[scoreMax, userData]}
          startAngle={205}
          endAngle={-155}
        >
          <RadialBar dataKey="score" cornerRadius={10} />
          <circle cx="50%" cy="50%" fill="white" r="70"></circle>
        </RadialBarChart>
      </ResponsiveContainer>
      <p className="p">
        <span>{userData.score}%</span> <br />
        de votre <br />
        objectif
      </p>
    </div>
  );
}

Kpi.propTypes = {
  userData: propTypes.object,
  isUserDataLoading: propTypes.bool,
};
export default Kpi;
