import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BootSplash from 'react-native-bootsplash';
import LoginOption from './src/Screens/Auth/LoginOption';

const Stack = createNativeStackNavigator();


function App(): React.JSX.Element {
  // useEffect(() => {
  //   const init = async () => {
  //     // …do multiple sync or async tasks
  //   };

  //   init().finally(async () => {
  //     await BootSplash.hide({ fade: true });
  //     console.log("BootSplash has been hidden successfully");
  //   });
  // }, []);

  return (
    <NavigationContainer
      onReady={() => {
        BootSplash.hide();
      }}>
      <Stack.Navigator>
        <Stack.Screen name="loginOptions" component={LoginOption} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
