import { StyleSheet } from "react-native";
import { theme } from "../../../Constants/Colors/theme";

export const styles = StyleSheet.create({
    inputContainer : {
        backgroundColor : theme.secondary100,
        borderWidth : 2,
        borderColor : theme.secondary50,
        borderRadius : 30,
        marginRight : 30,
        marginLeft : 30,
        margin : 10,
        padding : 5
    },
    textStyle : {
        // textAlign : 'center',
        marginLeft : 30,
        fontSize : 16,
        color :  theme.secondary50
    }
})