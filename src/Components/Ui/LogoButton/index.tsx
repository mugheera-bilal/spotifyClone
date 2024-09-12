import { FC } from "react";
import { IHome } from "../../../Constants/Interfaces";
import { Image, Pressable, View } from "react-native";
import { styles } from "./styles";

const LogoButton : FC<IHome> = ({onPress, source, overrideStyle}) => {
    return (
        <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
            <Image style={overrideStyle} source={source}/>

        </Pressable>
    )
}

export default LogoButton