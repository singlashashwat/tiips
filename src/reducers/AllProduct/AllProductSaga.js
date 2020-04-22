import {put, takeLatest, call, fork, take, select} from 'redux-saga/effects';
import {
  types as AllProductTypes,
  selectors as AllProductSelectors,
  actions as AllProductActions,
} from './index';
import {fetchApi, fetchAuthApi} from '../../api';
import {URL} from '../../contants';
import Toast from 'react-native-simple-toast';

function* getAllProduct(action) {
  try {
    const {data: getAllProductData, is_success} = yield call(fetchAuthApi, {
      url: URL.ALL_PRODUCT,
      //   data: action.payload,
    });
    console.log('getAllProduct', getAllProductData);
    if (is_success === true) {
      yield put(AllProductActions.getAllProductResponse(getAllProductData));
    }
  } catch (e) {
    console.log('e', e);
    const errMsg =
      e && e.error_description ? e.error_description : 'unknown error';
    Toast.show(errMsg, Toast.LONG);
  }
}

export default [
  takeLatest(AllProductTypes.GET_ALLPRODUCT, getAllProduct),
];
