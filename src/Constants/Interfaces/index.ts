import { ReactNode } from "react";
import { ImageSourcePropType } from "react-native";

export interface IHome {
    children? : ReactNode
    onPress? : () => void
    navigation? : any
    imageSource? : ImageSourcePropType
    ImgStyle? : object
    extraStyle? : any
    placeholder? : string
    extraTextStyle? : any
} 