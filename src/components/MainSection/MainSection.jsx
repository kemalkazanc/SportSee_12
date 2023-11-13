import React from 'react';
import propTypes from 'prop-types';
import Activity from '../Activity/Activity';
import Average from '../Average/Average';
import RadarComponent from '../RadarComponent/RadarComponent';
import Kpi from '../Kpi/Kpi';
import KeyFigures from '../KeyFigures/KeyFigures';

/**
 * MainSection component
 * @prop {object} userData
 * @prop {bool}  isUserDataLoading
 * @prop {object} activityData
 * @prop {bool}  isActivityDataLoading
 * @prop {object} averageSessionData
 * @prop {bool}  isAverageSessionDataLoading
 * @prop {object} userPerformanceData
 * @prop {bool}  isUserPerformanceDataLoading
 * @returns {React.ReactComponentElement}
 */
function MainSection({
  userData,
  isUserDataLoading,
  activityData,
  isActivityDataLoading,
  averageSessionData,
  isAverageSessionDataLoading,
  userPerformanceData,
  isUserPerformanceDataLoading,
}) {
  const internationalNumberFormat = new Intl.NumberFormat('en-US');
  const keyFiguresIcon = [
    {
      icon: 'calories-icon.svg',
      count:
        internationalNumberFormat.format(userData.keyData.calorieCount) +
        'kCal',
      type: 'Calories',
    },
    {
      icon: 'protein-icon.svg',
      count: userData.keyData.proteinCount + 'g',
      type: 'Proteines',
    },
    {
      icon: 'carbs-icon.svg',
      count: userData.keyData.carbohydrateCount + 'g',
      type: 'Glucides',
    },
    {
      icon: 'fat-icon.svg',
      count: userData.keyData.lipidCount + 'g',
      type: 'Lipides',
    },
  ];

  return (
    <section>
      <div className="activityContainer">
        <Activity
          activityData={activityData}
          isActivityDataLoading={isActivityDataLoading}
        />
        <Average
          averageSessionData={averageSessionData}
          isAverageSessionDataLoading={isAverageSessionDataLoading}
        />
        <RadarComponent
          userPerformanceData={userPerformanceData}
          isUserPerformanceDataLoading={isUserPerformanceDataLoading}
        />
        <Kpi userData={userData} isUserDataLoading={isUserDataLoading} />
      </div>
      <div className="keyFiguresContainer">
        {keyFiguresIcon.map((elm, index) => (
          <KeyFigures
            key={index}
            icon={`../assets/${elm.icon}`}
            count={elm.count}
            type={elm.type}
            isUserDataLoading={isUserDataLoading}
          />
        ))}
      </div>
    </section>
  );
}

MainSection.propTypes = {
  userData: propTypes.exact({
    keyData: propTypes.objectOf(propTypes.number),
    score: propTypes.number,
    fill: propTypes.string,
    id: propTypes.number,
    userInfos: propTypes.exact({
      firstName: propTypes.string,
      lastName: propTypes.string,
      age: propTypes.number,
    }),
  }),

  activityData: propTypes.arrayOf(
    propTypes.exact({
      day: propTypes.string,
      kilogram: propTypes.number,
      calories: propTypes.number,
    })
  ),

  averageSessionData: propTypes.arrayOf(
    propTypes.exact({
      day: propTypes.oneOfType([propTypes.number, propTypes.string]),
      sessionLength: propTypes.number,
    })
  ),

  userPerformanceData: propTypes.arrayOf(
    propTypes.exact({
      value: propTypes.number,
      kind: propTypes.string,
    })
  ),
};
export default MainSection;
