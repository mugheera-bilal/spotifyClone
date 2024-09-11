import { FC } from "react";
import { IHome } from "../../Constants/Interfaces";
import { Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const MusicPlayerScreen : FC<IHome> = () => {
    return (
      <>
      <LinearGradient
          colors={['#494848', '#272626', '#161515']}
          style={{flex: 1}}>



          </LinearGradient>
      </>
    )
}

export default MusicPlayerScreen