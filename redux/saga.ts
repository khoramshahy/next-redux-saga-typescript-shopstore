import { all, call, delay, put, take, takeLatest } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';

import { loadDataSuccess, getRatesSuccess, getRates } from './action';
import { IProduct, IRates, actionTypes } from '../interfaces';


function* loadDataSaga() {
  try {
    const { status, data }: AxiosResponse<IProduct[]> = yield call(
      axios.get,
      'https://fakestoreapi.com/products',
    );

    if (status === 200) {
      yield put(loadDataSuccess(data));
      yield put(getRates())
    }
  } catch (err) {
    
  }
}

function* getRatesSaga() {
  try {
    const { status, data }: AxiosResponse = yield call(
      axios.get,
      'https://api.exchangeratesapi.io/latest?base=USD&symbols=EUR,GBP,JPY',
    );

    if (status === 200) {
      yield put(getRatesSuccess(data.rates));
    }
  } catch (err) {
    
  }
}

function* rootSaga(): Generator {
  yield all([takeLatest(actionTypes.LOAD_DATA, loadDataSaga), , takeLatest(actionTypes.GET_RATES, getRatesSaga)]);
}

export default rootSaga;
