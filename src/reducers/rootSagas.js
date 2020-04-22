import {all} from 'redux-saga/effects';


import allproduct from './AllProduct/AllProductSaga'

export default function* sagas() {
  yield all([
    //

    ...allproduct,
  ]);
}
