import { FC } from "react";
import { IHome } from "../../../Constants/Interfaces";
import { TextInput, View } from "react-native";
import { styles } from "./styles";
import { theme } from "../../../Constants/Colors/theme";

const InputHolder : FC<IHome> = ({placeholder}) => {
    return(
        <View style={styles.inputContainer}>
            <TextInput style={styles.textStyle} placeholder={placeholder} placeholderTextColor={theme.secondary50}></TextInput>
        </View>
    )
}

export default InputHolder