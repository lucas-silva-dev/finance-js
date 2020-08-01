import produce from 'immer';

const INITIAL_STATE = {
  stock: {},
  loading: false,
};

export default function stock(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@stock/STOCK_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@stock/STOCK_SUCCESS': {
        draft.stock = action.payload.stock;
        draft.loading = false;
        break;
      }
      case '@stock/STOCK_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
