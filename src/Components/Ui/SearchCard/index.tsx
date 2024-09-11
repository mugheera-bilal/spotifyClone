import { FC } from "react";
import { IHome } from "../../../Constants/Interfaces";
import { Text, View } from "react-native";
import { styles } from "./styles";

const SearchCard : FC<IHome> = ({children}) => {
    return(
        <View style={styles.boxContainer}>
            <Text style={styles.textStyle}>{children}</Text>
        </View>

    )
}

export default SearchCard