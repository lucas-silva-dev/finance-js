import React, { useState, useLayoutEffect } from 'react';
import {
  ComposedChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  Bar,
  Area,
} from 'recharts';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import './styles.css';

function CustomTooltip({ active, payload }) {
  if (active) {
    const data = payload[0].payload;
    const volume = data.volumeM.toFixed(2);

    return (
      <div className="custom-tooltip">
        <p className="">
          <span>Open </span>
          {data.open}
        </p>
        <p className="">
          <span>high</span>
          {data.high}
        </p>
        <p className="">
          <span>Low</span> {data.low}
        </p>
        <p className="">
          <span>Close</span> {data.close}
        </p>
        <p className="">
          <span>Volume</span>
          {`${volume}M`}
        </p>
      </div>
    );
  }

  return null;
}

function Chart() {
  const chartData = useSelector(state => state.chart.chart);

  const [chart, setChart] = useState([]);

  useLayoutEffect(() => {
    setChart(chartData);
  }, [chartData]);

  return (
    <ComposedChart width={620} baseValue="dataMin" height={250} data={chart}>
      <XAxis dataKey="label" />
      <YAxis />
      <Tooltip content={<CustomTooltip />} />
      <CartesianGrid stroke="#f5f5f5" />
      <Bar dataKey="volumeM" fill="#413ea0" />
      <Area
        type="monotone"
        dataKey="close"
        stroke="#ff7300"
        fillOpacity={0}
        fill="#ff7300"
      />
    </ComposedChart>
  );
}

export default Chart;

CustomTooltip.defaultProps = {
  active: false,
  payload: [],
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(PropTypes.object),
};
