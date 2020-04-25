/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import EnhancedAppContainer from './navigators';
import {configureStore} from './store';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import SplashScreen from 'react-native-splash-screen';
import Splash from './components/Splash';
import Orientation from 'react-native-orientation-locker';
import AllProduct from './components/AllProduct';

const App = () => {
  const [store, persistor] = configureStore();

  useEffect(() => {
    Orientation.lockToPortrait();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<Splash />}>
        <StatusBar hidden />
        <EnhancedAppContainer />
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
