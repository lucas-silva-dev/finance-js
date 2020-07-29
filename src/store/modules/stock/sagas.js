import { all, takeLatest, put, call } from 'redux-saga/effects';

import api from '~/services/api';

import history from '~/services/history';

import { stockSuccess, stockFailure } from './actions';

export function* requestStock({ payload }) {
  try {
    const { symbol } = payload;

    const stockUrl = `${symbol}/quote?token=pk_6d0042f4630a4e0895c9e06dd7222e1c`;

    const { data: stock } = yield call(api.get, stockUrl);

    // const { data: stock } = stockResponse;
    // const { data: chart } = chartResponse;

    yield put(stockSuccess(stock));

    history.push('/search');
  } catch (error) {
    yield put(stockFailure());
    history.push('/error');
  }
}

export default all([takeLatest('@stock/STOCK_REQUEST', requestStock)]);
