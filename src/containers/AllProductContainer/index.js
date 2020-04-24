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
  var productData =[];
  var FirstINdex,lastINdex
  var [count, setCount] = useState(0);
  var [etfcount, etfsetCount] = useState(0);
  var [energycount, energysetCount] = useState(0);
  var [fincount, finsetCount] = useState(0);
  var [carecount, caresetCount] = useState(0);
  var [itcount, itsetCount] = useState(0);
  var [indcount, indsetCount] = useState(0);
  var [matcount, matsetCount] = useState(0);
  var [realcount, realsetCount] = useState(0);
  var [telcocount, telcosetCount] = useState(0);
  var [utlcount, utlsetCount] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(AllProductActions.getAllProduct());
  }, [dispatch]);
  const getData = useSelector(AllProductSelectors.selectallproductresponse);
  console.log("getData",getData)
   productData = getData;
  const loading = useSelector(AllProductSelectors.selectLoading);
  if(count == 0){
    FirstINdex = 0,
    lastINdex = 3
  }

const onclickLeft = (title) => {
  console.log("title",title)
  if(title == 'Consumer Product'){
    setCount(count = count - 1)
    if(count < 0){
      setCount(count = 0)
    }
  } else if(title == 'ETFs'){
    etfsetCount(etfcount = etfcount - 1)
    if(etfcount < 0){
      etfsetCount(etfcount = 0)
    }
  } else if(title == 'Energy'){
    energysetCount(energycount = energycount - 1)
    if(energycount < 0){
      energysetCount(energycount = 0)
    }
  } else if(title == 'Financials'){
    finsetCount(fincount = fincount - 1)
    if(fincount < 0){
      finsetCount(fincount = 0)
    }
  } else if(title == 'Health Care'){
    caresetCount(carecount = carecount - 1)
    if(carecount < 0){
      caresetCount(carecount = 0)
    }
  } else if(title == 'IT'){
    itsetCount(itcount = itcount - 1)
    if(itcount < 0){
      itsetCount(itcount = 0)
    }
  } else if(title == 'Industrials'){
    indsetCount(indcount = indcount - 1)
    if(indcount < 0){
      indsetCount(indcount = 0)
    }
  } else if(title == 'Materials'){
    matsetCount(matcount = matcount - 1)
    if(matcount < 0){
      matsetCount(matcount = 0)
    }
  } else if(title == 'Real Estate'){
    realsetCount(realcount = realcount - 1)
    if(realcount < 0){
      realsetCount(realcount = 0)
    }
  } else if(title == 'Telco'){
    telcosetCount(telcocount = telcocount - 1)
    if(telcocount < 0){
      telcosetCount(telcocount = 0)
    }
  } else if(title == 'Utilities'){
    utlsetCount(utlcount = utlcount - 1)
    if(utlcount < 0){
      utlsetCount(utlcount = 0)
    }
  }
};

const onclickRight = (title) => {
  console.log("title",title)
  if(title == 'Consumer Product'){
  setCount(count = count + 1)
  } else if(title == 'ETFs'){
    etfsetCount(etfcount = etfcount + 1)
  } else if(title == 'Energy'){
    energysetCount(energycount = energycount + 1)
  } else if(title == 'Financials'){
    finsetCount(fincount = fincount + 1)
  } else if(title == 'Health Care'){
    caresetCount(carecount = carecount + 1)
  } else if(title == 'IT'){
    itsetCount(itcount = itcount + 1)
  } else if(title == 'Industrials'){
    indsetCount(indcount = indcount + 1)
  } else if(title == 'Materials'){
    matsetCount(matcount = matcount + 1)
  } else if(title == 'Real Estate'){
    realsetCount(realcount = realcount + 1)
  } else if(title == 'Telco'){
    telcosetCount(telcocount = telcocount + 1)
  } else if(title == 'Utilities'){
    utlsetCount(utlcount = utlcount + 1)
  }
};

  return (
    <AllProduct
    productData= {productData ? productData : ''}
      title={'tiips'}
      loading={loading}
      onclickRight={onclickRight}
      onclickLeft={onclickLeft}
      count={count}
      etfcount={etfcount}
      energycount={energycount}
      fincount={fincount}
      carecount={carecount}
      itcount={itcount}
      indcount={indcount}
      matcount={matcount}
      realcount={realcount}
      telcocount={telcocount}
      utlcount={utlcount}
    />
  );
};

export default AllProductContainer;
