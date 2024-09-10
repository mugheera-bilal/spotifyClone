import { StyleSheet } from "react-native";
import { theme } from "../../../Constants/Colors/theme";

export const styles = StyleSheet.create({
    button : {
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : theme.secondary100,
        borderRadius : 30,
        borderWidth : 2,
        borderColor : 'white',
        padding : 15,
        marginLeft : 20,
        marginRight : 20,
        marginBottom : 5

    },
    textStyle : {
        flex : 1,
        textAlign : 'center',
        textAlignVertical : 'center',
        color : 'white',
        fontSize : 18,
        fontWeight : '800'
    }, 
    innerStyle : {
        flexDirection : 'row'

    }
})