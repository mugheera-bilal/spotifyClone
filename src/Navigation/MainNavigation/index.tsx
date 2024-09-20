import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BootSplash from 'react-native-bootsplash';
import StackNavigation from '../StackNavigation';
import BottomNavigation from '../BottomNavigation';
import {NavigationContainer} from '@react-navigation/native';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();

function MainNavigation() {

  const authState = useSelector((state: any) => state.auth.loggedIn);

 

  return (
    <NavigationContainer
      onReady={() => {
        BootSplash.hide();
      }}>
      <Stack.Navigator>
        { !authState ? (<Stack.Screen
          name="loginOption"
          component={StackNavigation}
          options={{
            headerShown: false,
          }}
        /> ) : (
        <Stack.Screen
          name="Home"
          component={BottomNavigation}
          options={{
            headerShown: false,
          }}
        />) }
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;
