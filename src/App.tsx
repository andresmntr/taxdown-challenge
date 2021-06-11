/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';

import {AppNavigator} from './navigation';
import {FormScreen} from './screens';

const App = () => {
  console.log('STORE', store);
  return (
    <Provider store={store}>
      <AppNavigator />
      {/* <Form /> */}
    </Provider>
  );
};

export default App;
