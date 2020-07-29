export function stockRequest(symbol) {
  return {
    type: '@stock/STOCK_REQUEST',
    payload: { symbol },
  };
}

export function stockSuccess(stock) {
  return {
    type: '@stock/STOCK_SUCCESS',
    payload: { stock },
  };
}

export function stockFailure() {
  return {
    type: '@stock/STOCK_FAILURE',
  };
}
