import propTypes from 'prop-types';
import Loader from '../Loader/Loader';
import {
  YAxis,
  XAxis,
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
/**
 * Average component
 * @prop {object} averageSessionData
 * @prop {bool} isAverageSessionDataLoading
 * @returns {React.ReactComponentElement}
 */
function Average({ averageSessionData, isAverageSessionDataLoading }) {
  return isAverageSessionDataLoading ? (
    <div className="average">
      <Loader />
    </div>
  ) : (
    <div className="average">
      <h2>Durée moyenne des sessions</h2>
      <ResponsiveContainer
        width="115%"
        height="100%"
        className="averageResponsive"
      >
        <LineChart
          data={averageSessionData}
          margin={{ top: 0, right: 0, left: 0, bottom: 15 }}
          onMouseMove={(e) => {
            if (e.isTooltipActive === true) {
              let div = document.querySelector('.averageResponsive');
              let windowWidth = div.clientWidth;
              let mouseXpercentage = Math.round(
                (e.activeCoordinate.x / windowWidth) * 100
              );
              // @ts-ignore
              div.style.background = `linear-gradient(90deg, rgba(255,0,0,1) ${mouseXpercentage}%, rgba(175,0,0,1.5) ${mouseXpercentage}%, rgba(175,0,0,1.5) 100%)`;
            }
          }}
        >
          <Tooltip content={<AverageTooltip />} />
          <XAxis
            dataKey="day"
            stroke="#ffffff"
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            dataKey="sessionLength"
            hide={true}
            type="number"
            domain={['dataMin -15', 'dataMax + 45']}
          />
          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="#ffffff"
            dot={false}
            strokeWidth={2}
            activeDot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
Average.propTypes = {
  averageSessionData: propTypes.arrayOf(
    propTypes.exact({
      day: propTypes.oneOfType([propTypes.number, propTypes.string]),
      sessionLength: propTypes.number,
    })
  ),
  isAverageSessionDataLoading: propTypes.bool,
};

function AverageTooltip({ active, payload }) {
  return (
    active && (
      <div className="averageTooltip">
        <p className="value">{`${payload[0].value} cm`}</p>
      </div>
    )
  );
}
AverageTooltip.propTypes = {
  active: propTypes.bool,
  payload: propTypes.array,
};

export default Average;
