import {BackHandler, Image} from 'react-native';
import {useFocusEffect} from 'react-navigation-hooks';
import React, {useMemo, useRef, useCallback, useState} from 'react';
import SimpleToast from 'react-native-simple-toast';
import deepEqual from 'dequal';

const useBackHandler = (backHandler: () => boolean) => {
  useFocusEffect(() => {
    // console.log('useBackHandler addEventListener');
    const subscription = BackHandler.addEventListener(
      'hardwareBackPress',
      backHandler,
    );
    return () => {
      // console.log('useBackHandler remove');
      subscription.remove();
    };
  });
};
const doubleBackMessage = 'Press back again to exit the app';

const useDoubleTapExit = () => {
  const isTimerRunning = useRef(false);
  const timerRef = useRef(null);
  useFocusEffect(() => {
    // console.log('useBackHandler addEventListener');
    const subscription = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        if (isTimerRunning.current) {
          isTimerRunning.current = false;
          // return false to exit app
          return false;
        } else {
          isTimerRunning.current = true;
          timerRef.current = setTimeout(() => {
            isTimerRunning.current = false;
          }, 2000);
          SimpleToast.show(doubleBackMessage, SimpleToast.LONG);
          return true;
        }
      },
    );
    return () => {
      // console.log('useBackHandler remove');
      clearTimeout(timerRef.current);
      subscription.remove();
    };
  });
};

function useDeepCompareMemoize(value) {
  const ref = useRef();

  if (!deepEqual(value, ref.current)) {
    ref.current = value;
    console.log('!deepEqual');
  }

  return ref.current;
}

const useComponentSize = () => {
  const [size, setSize] = useState({width: 0, height: 0});

  const onLayout = useCallback(event => {
    const {width, height} = event.nativeEvent.layout;
    setSize({width, height});
  }, []);

  return [size, onLayout];
};

const useResolveAssetSource = source => {
  const {height, width} = useMemo(() => Image.resolveAssetSource(source), [
    source,
  ]);
  const size = {
    height,
    width,
  };

  return [size, source];
};

export {
  useBackHandler,
  useDoubleTapExit,
  useDeepCompareMemoize,
  useComponentSize,
  useResolveAssetSource,
};
