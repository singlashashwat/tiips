import React, {useEffect} from 'react';
import Splash from '../../components/Splash';
import SplashScreen from 'react-native-splash-screen';
import {useSelector, useDispatch} from 'react-redux';
import {useFocusEffect} from 'react-navigation-hooks';
import {navigateAndReset, navigate} from '../../navigators/NavigationService';
import ScreenNames from '../../navigators/ScreenNames';
import {
    types as AllProductTypes,
    selectors as AllProductSelectors,
    actions as AllProductActions,
  } from '../../reducers/AllProduct';
const SplashContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(AllProductActions.getAllProduct());
    navigateAndReset(ScreenNames.AllProductContainer);
    setTimeout(() => SplashScreen.hide(), 3000);
  }, [dispatch]);
  return <Splash />;
};

export default SplashContainer;
