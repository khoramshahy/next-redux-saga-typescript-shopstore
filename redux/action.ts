import { actionTypes, IProduct, IRates } from '../interfaces';
import * as actionIs from '../interfaces/actions.interfaces';

export function loadData(): actionIs.LoadData {
  return { type: actionTypes.LOAD_DATA };
}

export function loadDataSuccess(data: IProduct[]): actionIs.LoadDataSuccess {
  return {
    type: actionTypes.LOAD_DATA_SUCCESS,
    data,
  };
}

export function getRates(): actionIs.GetRates {
  return { type: actionTypes.GET_RATES };
}

export function getRatesSuccess(data: IRates): actionIs.GetRatesSuccess {
  return {
    type: actionTypes.GET_RATES_SUCCESS,
    data,
  };
}
