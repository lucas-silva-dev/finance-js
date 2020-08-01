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
import { FaSpinner } from 'react-icons/fa';

import { chartRequest } from '~/store/modules/chart/actions';

import Button from '~/components/Button';

import {
  TooltipContainer,
  ChartContainer,
  PeriodContent,
  ResponsiveChart,
} from './styles';

function CustomTooltip({ active, payload }) {
  if (active) {
    const data = payload[0].payload;
    const volume = data.volumeM.toFixed(2);

    return (
      <TooltipContainer>
        <p>
          <span>Open </span>
          {data.open}
        </p>
        <p>
          <span>high</span>
          {data.high}
        </p>
        <p>
          <span>Low</span> {data.low}
        </p>
        <p>
          <span>Close</span> {data.close}
        </p>
        <p>
          <span>Volume</span>
          {`${volume}M`}
        </p>
        <p>
          <span>date</span>
          {data.date}
        </p>
      </TooltipContainer>
    );
  }

  return null;
}

function Chart() {
  const chartData = useSelector(state => state.chart.chart);
  const loading = useSelector(state => state.chart.loading);
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
    <ChartContainer>
      <PeriodContent>
        {range.map(r => (
          <li key={r.period}>
            <Button onClick={() => handleChangePeriod(r.period)}>
              {r.period}
            </Button>
          </li>
        ))}
      </PeriodContent>

      <ResponsiveChart loading={loading}>
        {loading ? (
          <FaSpinner color="#632342" size={50} />
        ) : (
          <ComposedChart data={chart}>
            <YAxis
              stroke="#333"
              unit=" $"
              minTickGap={0}
              tickLine={false}
              scale="sqrt"
            />
            <XAxis stroke="#333" dataKey="label" />
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
        )}
      </ResponsiveChart>
    </ChartContainer>
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
