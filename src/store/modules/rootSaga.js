import { all } from 'redux-saga/effects';

import stock from './stock/sagas';
import chart from './chart/sagas';

export default function* rootSaga() {
  return yield all([stock, chart]);
}
