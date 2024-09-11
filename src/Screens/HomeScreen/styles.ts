import { StyleSheet } from "react-native";
import { theme } from "../../Constants/Colors/theme";

export const styles = StyleSheet.create({
    rootContainer : {
        flex : 1,
        height : 1000
    }, 
    iconContainer : {
        flexDirection :"row",
        alignItems : 'center'
    },
    titleIcon : {
        flexDirection :"row",
        justifyContent : 'space-between'

    }
})