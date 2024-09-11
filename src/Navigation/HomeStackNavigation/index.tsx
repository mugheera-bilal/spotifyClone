import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../Screens/HomeScreen';
import PlaylistScreen from '../../Screens/PlaylistScreen';
import MusicPlayerScreen from '../../Screens/MusicPlayerScreen';

const Stack = createNativeStackNavigator();

function HomeStackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeStack"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Playlist"
        component={PlaylistScreen}
        options={{headerTransparent: true, headerTintColor: '#fff', title: ''}}
      />
      <Stack.Screen
        name="MusicPlayer"
        component={MusicPlayerScreen}
        options={{headerTransparent: true, headerTintColor: '#000000', title: ''}}
      />
    </Stack.Navigator>
  );
}

export default HomeStackNavigation;
