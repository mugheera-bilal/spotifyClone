import { Text, View } from "react-native";
import { IHome } from "../../Constants/Interfaces";
import { FC } from "react";
import Title from "../../Components/Ui/Title";
import { styles } from "./styles";

const SearchScreen : FC<IHome> = ( ) => {
    return(
        <>
        <View style={styles.container}>

        <Title extraTitle={styles.titleStyle}>Search</Title>
        </View>
        </>
    )
}

export default SearchScreen