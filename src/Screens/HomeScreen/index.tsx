import { FC } from "react";
import { IHome } from "../../Constants/Interfaces";
import { Text, View } from "react-native";

const HomeScreen : FC<IHome> = () => {
    return(
        <View>
            
            <Text>
                This is my home screen
            </Text>
        </View>
    )

}

export default HomeScreen