import React from 'react';
import {StyleSheet} from 'react-native';

import {Provider} from 'react-redux';
import {persistor, store} from './src/Redux/Store/store';
import MainNavigation from './src/Navigation/MainNavigation';
import {PersistGate} from 'redux-persist/integration/react';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainNavigation />
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({});

export default App;
