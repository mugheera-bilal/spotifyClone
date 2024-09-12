import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../Screens/HomeScreen';
import PlaylistScreen from '../../Screens/PlaylistScreen';
import MusicPlayerScreen from '../../Screens/MusicPlayerScreen';
import 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const Stack = createStackNavigator();

function HomeStackNavigation() {
  return (
    <GestureHandlerRootView>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeStack"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Playlist"
          component={PlaylistScreen}
          options={{
            headerTransparent: true,
            headerTintColor: '#fff',
            title: '',
          }}
        />
        <Stack.Screen
          name="MusicPlayer"
          component={MusicPlayerScreen}
          options={{
            headerTransparent: true,
            headerTintColor: '#fff',
            presentation: 'modal',
          }}
        />
      </Stack.Navigator>
    </GestureHandlerRootView>
  );
}

export default HomeStackNavigation;
