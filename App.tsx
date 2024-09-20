import React from 'react';
import {StyleSheet} from 'react-native';

import {Provider} from 'react-redux';
import {store} from './src/Redux/Store/store';
import MainNavigation from './src/Navigation/MainNavigation';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
}

const styles = StyleSheet.create({});

export default App;
