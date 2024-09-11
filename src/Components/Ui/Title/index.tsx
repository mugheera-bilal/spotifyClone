import { FC } from "react";
import { IHome } from "../../../Constants/Interfaces";
import { Text, View } from "react-native";
import { styles } from "./styles";

const Title : FC<IHome> = ({text, extraTitle}) => {
    return (
        <View style={styles.root}>
            <Text style={[styles.titleText, extraTitle]}>{text}</Text>
        </View>
    )
}

export default Title