import produce from 'immer';

const INITIAL_STATE = {
  chart: null,
  loading: false,
};

export default function chart(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@chart/CHART_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@chart/CHART_SUCCESS': {
        draft.chart = action.payload.chart;
        draft.loading = false;
        break;
      }
      case '@chart/CHART_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
