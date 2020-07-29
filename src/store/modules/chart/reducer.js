import produce from 'immer';

const INITIAL_STATE = {
  chart: null,
};

export default function chart(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@chart/CHART_SUCCESS': {
        draft.chart = action.payload.chart;
        break;
      }
      case '@chart/CHART_FAILURE': {
        break;
      }
      default:
    }
  });
}
