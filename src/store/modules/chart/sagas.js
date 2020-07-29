import { all, takeLatest, put, call } from 'redux-saga/effects';

import api from '~/services/api';

import history from '~/services/history';

import { volumeFormatted } from '~/utils/format';

import { chartSuccess, chartFailure } from './actions';

export function* requestChart({ payload }) {
  try {
    const { symbol } = payload;

    const chartUrl = `${symbol}/chart/1m?token=pk_6d0042f4630a4e0895c9e06dd7222e1c`;

    const { data } = yield call(api.get, chartUrl);

    const chart = data.map(charts => ({
      ...charts,
      volumeM: volumeFormatted(charts.volume),
    }));

    // const { data: stock } = stockResponse;
    // const { data: chart } = chartResponse;

    yield put(chartSuccess(chart));

    history.push('/search');
  } catch (error) {
    yield put(chartFailure());
    history.push('/error');
  }
}

export default all([takeLatest('@chart/CHART_REQUEST', requestChart)]);
