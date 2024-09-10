import { FC } from "react";
import { IHome } from "../../../Constants/Interfaces";
import { Text, View } from "react-native";
import { styles } from "./styles";

const Title : FC<IHome> = ({children, extraTitle}) => {
    return (
        <View style={styles.root}>
            <Text style={[styles.titleText, extraTitle]}>{children}</Text>
        </View>
    )
}

export default Title