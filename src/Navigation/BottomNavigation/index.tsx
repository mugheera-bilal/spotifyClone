import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../Screens/HomeScreen';
import SearchScreen from '../../Screens/SearchScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {theme} from '../../Constants/Colors/theme';

const Tab = createBottomTabNavigator();

function BottomNavigation() {

  return (
    <Tab.Navigator screenOptions={{
    
     
        tabBarActiveTintColor: 'white', 
        tabBarInactiveTintColor: theme.secondary10, 
        tabBarActiveBackgroundColor : 'transparent',
        tabBarLabelStyle : {fontSize : 14},
        tabBarStyle: {
            backgroundColor: 'transparent',
            position: 'absolute',
            borderTopWidth: 0, 
            left: 0,
            right: 0,
            bottom: 0,
            elevation: 0,
          },
        headerShown : false
    }}
 
  
     >
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => {
            return <Ionicons name="home" color={color} size={size} />;
          },
          tabBarLabel : 'Home'
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({color, size}) => {
            return <Ionicons name="search" color={color} size={size} />;
          },
        }}
      />
  
    </Tab.Navigator>
  );
}

export default BottomNavigation;
