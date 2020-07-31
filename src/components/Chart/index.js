/* eslint-disable no-console */
import React, { useState, useLayoutEffect } from 'react';
import {
  ComposedChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  Bar,
  Line,
} from 'recharts';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { chartRequest } from '~/store/modules/chart/actions';

import Button from '~/components/Button';

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
        <p className="">
          <span>date</span>
          {data.date}
        </p>
      </div>
    );
  }

  return null;
}

function Chart() {
  const chartData = useSelector(state => state.chart.chart);
  const symbol = useSelector(state => state.stock.stock.symbol);
  const dispatch = useDispatch();

  const [chart, setChart] = useState([]);

  useLayoutEffect(() => {
    setChart(chartData);
  }, [chartData]);

  function handleChangePeriod(period) {
    dispatch(chartRequest(symbol, period));
  }

  const range = [
    { period: '1D' },
    { period: '5D' },
    { period: '1M' },
    { period: '3M' },
    { period: '6M' },
    { period: 'YTD' },
    { period: '1Y' },
    { period: '2Y' },
    { period: '5Y' },
    { period: 'MAX' },
  ];

  return (
    <section className="chart">
      <div className="historical">
        {range.map(r => (
          <li key={r.period}>
            <Button onClick={() => handleChangePeriod(r.period)}>
              {r.period}
            </Button>
          </li>
        ))}
      </div>

      <ComposedChart width={620} height={240} data={chart}>
        <XAxis stroke="#333" dataKey="label" />
        <YAxis
          stroke="#333"
          unit=" $"
          minTickGap={0}
          tickLine={false}
          scale="sqrt"
        />
        <Tooltip content={<CustomTooltip />} />
        <CartesianGrid stroke="#e9e9e9" />
        <Bar dataKey="volumeM" fill="#FB8C66" />
        <Line
          dot={false}
          type="monotoneX"
          dataKey="close"
          stroke="#4a1a31"
          fillOpacity={0}
          fill="#4a1a31"
        />
      </ComposedChart>
    </section>
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
