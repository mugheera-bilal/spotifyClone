import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    searchContainer : {
        // flex : 1,
        backgroundColor : 'white',
        borderRadius : 10,
        margin : 10,
        padding : 7,
        flexDirection : 'row',
        // justifyContent : 'center',
        alignItems : 'center'
    },
    imageStyle : {
        width : 30,
        height : 30
    }, 
    searchText : {
        fontSize : 18,
        marginLeft : 10,
        width : '100%',
        fontWeight : '900'
    }
})