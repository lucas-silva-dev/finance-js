import produce from 'immer';

const INITIAL_STATE = {
  stock: {},
};

export default function stock(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@stock/STOCK_SUCCESS': {
        draft.stock = action.payload.stock;
        break;
      }
      case '@stock/STOCK_FAILURE': {
        break;
      }
      default:
    }
  });
}
