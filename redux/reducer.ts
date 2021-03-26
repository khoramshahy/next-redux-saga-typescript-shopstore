import { AppState, Action, actionTypes } from '../interfaces';
import { HYDRATE } from 'next-redux-wrapper';

export const exampleInitialState: AppState = {
  count: 0,
  error: null,
  lastUpdate: 0,
  light: false,
  products: null,
  rates: null
};

const reducer = (
  state = exampleInitialState,
  action: Action | { type: typeof HYDRATE; payload: AppState },
): AppState => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };

    case actionTypes.LOAD_DATA_SUCCESS:
      return {
        ...state,
        ...{ products: action.data },
      };

    case actionTypes.GET_RATES_SUCCESS:
      return {
        ...state,
        ...{ rates: action.data },
      };

    default:
      return state;
  }
};

export default reducer;
