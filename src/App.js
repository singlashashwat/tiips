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
import {GoogleSignin} from '@react-native-community/google-signin';
import Orientation from 'react-native-orientation-locker';
import AllProduct from './components/AllProduct';

const App = () => {
  const [store, persistor] = configureStore();

  useEffect(() => {
    // GoogleSignin.configure({
    //   webClientId:
    //     '58002921881-29j61hu3v2n77nund1igur7ramai2dbs.apps.googleusercontent.com', // required
    //   iosClientId:
    //     '58002921881-e144amfefq9jlj59rdgsofmc1qj278re.apps.googleusercontent.com',
    // });
    Orientation.lockToPortrait();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<AllProduct />}>
        <StatusBar hidden />
        <EnhancedAppContainer />
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
