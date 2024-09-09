import { createNativeStackNavigator } from "@react-navigation/native-stack"
import LoginOption from "../../Screens/Auth/LoginOption"
import LoginScreen from "../../Screens/Auth/Login"
import SignupScreen from "../../Screens/Auth/SignUp"

const Stack = createNativeStackNavigator()

function StackNavigation () {
    return(

        <Stack.Navigator initialRouteName="loginPage" screenOptions={{
          contentStyle : {backgroundColor : 'black'},
          headerShown : false

        }}>
        <Stack.Screen name="loginPage" component={LoginOption}/>
        <Stack.Screen name="login" component={LoginScreen}/>
        <Stack.Screen name="signup" component={SignupScreen}/>
        
    </Stack.Navigator>

)

}

export default StackNavigation