import { createNativeStackNavigator } from "@react-navigation/native-stack"
import LoginOption from "../../Screens/Auth/LoginOption"
import LoginScreen from "../../Screens/Auth/Login"
import SignupScreen from "../../Screens/Auth/SignUp"
import { theme } from "../../Constants/Colors/theme"

const Stack = createNativeStackNavigator()

function StackNavigation () {
    return(

        <Stack.Navigator initialRouteName="loginPage" screenOptions={{
          contentStyle : {backgroundColor : theme.secondary100},
          headerShown : false

        }}>
        <Stack.Screen name="loginPage" component={LoginOption}/>
        <Stack.Screen name="signup" component={SignupScreen}/>
        <Stack.Screen name="login" component={LoginScreen}/>
        
    </Stack.Navigator>

)

}

export default StackNavigation