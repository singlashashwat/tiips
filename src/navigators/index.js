import React from 'react';
import {View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// import  from './ScreenNames';
import ScreenNames from './ScreenNames';
import {ScreenPaths} from './ScreenPaths';

import {actions as navActions} from '../reducers/nav';
import {getActiveRouteName} from '../helpers';
import {useDispatch, useSelector} from 'react-redux';
import {setTopLevelNavigator} from './NavigationService';
import {fromRight} from 'react-navigation-transitions';

const AppNavigator = createStackNavigator(
  {
    ...ScreenPaths,
  },
  {
    mode: 'modal',
    initialRouteName: ScreenNames.SplashContainer,
    headerMode: 'none',
    transparentCard: true,
    cardStyle: {
      backgroundColor: 'transparent',
      opacity: 1,
    },
    defaultNavigationOptions: {
      gesturesEnabled: false,
      header: null,
      title: '',
    },
  },
);

const AppContainer = createAppContainer(AppNavigator);

const EnhancedAppContainer = ({navRef, onNavigationStateChange}) => {
  const dispatch = useDispatch();
  const trackCurrentState = (prevState, currentState, action) => {
    dispatch(navActions.setCurrentScreen(getActiveRouteName(currentState)));
    // console.log('prevState', getActiveRouteName(prevState));
    // console.log('currentState', getActiveRouteName(currentState));
    // console.log('action', action);
  };

  // const locale = useSelector(globalSelectors.selectLanuage);

  // setupI18n(locale);
  return (
    <AppContainer
      ref={navigatorRef => {
        // Initialize the NavigationService (see https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html)
        setTopLevelNavigator(navigatorRef);
      }}
      onNavigationStateChange={trackCurrentState}
    />
  );
};

export default EnhancedAppContainer;
