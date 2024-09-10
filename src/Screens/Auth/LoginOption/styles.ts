import { StyleSheet } from "react-native";
import { theme } from "../../../Constants/Colors/theme";

export const styles = StyleSheet.create({
    imageContainer : {
        padding : 10,
        marginTop : 180,
        alignSelf: 'center',
    },
    imageStyle : {
        width : 100,
        height : 100,
    },
    textContainer : {
        // justifyContent : 'center',
        // alignItems : 'center',
        alignSelf : 'center',
        padding : 10,
        width : 300,
        height : 150

    },
    textStyle : {
        color : 'white',
        fontSize : 34,
        textAlign : 'center',
        // textAlignVertical : 'center',
        fontWeight : '800'
    }, 
    logoStyle : {
        width : 20,
        height : 20

    }, 
    mobileLogoStyle : {
        width : 30,
        height : 30
    },
    signupButton : {
        backgroundColor : theme.primary100,
        borderColor : theme.primary100
    },
    loginButton : {
        borderColor : theme.secondary100

    }
})