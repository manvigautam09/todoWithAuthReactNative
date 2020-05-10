/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import {store} from './src/store';
import {Provider} from 'react-redux';

import Demonstration from './src/components/demonstartion';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <Demonstration />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
