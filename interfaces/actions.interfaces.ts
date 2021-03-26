import { IProduct, IRates } from './index';

export enum actionTypes {
  LOAD_DATA = 'LOAD_DATA',
  LOAD_DATA_SUCCESS = 'LOAD_DATA_SUCCESS',
  GET_RATES='GET_RATES',
  GET_RATES_SUCCESS='GET_RATES_SUCCESS',
}

export type Action =
  | LoadData
  | LoadDataSuccess
  | GetRates
  | GetRatesSuccess;

export interface LoadData {
  type: actionTypes.LOAD_DATA;
}

export interface LoadDataSuccess {
  type: actionTypes.LOAD_DATA_SUCCESS;
  data: IProduct[];
}

export interface GetRates {
  type: actionTypes.GET_RATES;
}

export interface GetRatesSuccess {
  type: actionTypes.GET_RATES_SUCCESS;
  data: IRates;
}