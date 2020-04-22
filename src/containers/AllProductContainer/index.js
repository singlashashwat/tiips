import React, {useEffect, useCallback, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import AllProduct from '../../components/AllProduct';
import {
  navigateAndReset,
  openDrawer,
  navigate,
} from '../../navigators/NavigationService';
import ScreenNames from '../../navigators/ScreenNames';
import {
    types as AllProductTypes,
    selectors as AllProductSelectors,
    actions as AllProductActions,
  } from '../../reducers/AllProduct';

const AllProductContainer = () => {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(AllProductActions.getAllProduct());
  // }, [dispatch,productData]);
  const productData = useSelector(AllProductSelectors.selectallproductresponse);


  return (
    <AllProduct
    productData= {productData ? productData : ''}
      title={'tiips'}
    />
  );
};

export default AllProductContainer;
