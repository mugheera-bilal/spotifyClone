import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import BootSplash from 'react-native-bootsplash';
import StackNavigation from './src/Navigation/MainNavigation';
import BottomNavigation from './src/Navigation/BottomNavigation';
import { Provider } from 'react-redux';
import { store } from './src/Redux/Store/store';

const Stack = createNativeStackNavigator();


function App(): React.JSX.Element {

  return (
    <Provider store={store}>

    <NavigationContainer
      onReady={() => {
        BootSplash.hide();
      }}>
      <Stack.Navigator >
        <Stack.Screen name="loginOption" component={StackNavigation}  options={{
          headerShown : false, 
        }}/>
        <Stack.Screen name='Home' component={BottomNavigation} options={{
          headerShown : false, 
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
        </Provider>
  );
}

const styles = StyleSheet.create({});

export default App;
