import { combineReducers } from 'redux';

import stock from './stock/reducer';
import chart from './chart/reducer';

export default combineReducers({ stock, chart });
