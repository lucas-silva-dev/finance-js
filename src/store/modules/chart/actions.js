export function chartRequest(symbol, period) {
  return {
    type: '@chart/CHART_REQUEST',
    payload: { symbol, period },
  };
}

export function chartSuccess(chart) {
  return {
    type: '@chart/CHART_SUCCESS',
    payload: { chart },
  };
}

export function chartFailure() {
  return {
    type: '@chart/CHART_FAILURE',
  };
}
