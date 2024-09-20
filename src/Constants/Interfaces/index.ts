import { ReactNode } from "react";
import { ImageSourcePropType } from "react-native";

export interface IHome {
    searchingCategories? : any
    children? : ReactNode
    onPress? : any
    navigation? : any
    route? : any
    imageSource? : ImageSourcePropType
    ImgStyle? : object
    extraStyle? : any
    placeholder? : string
    extraTextStyle? : any
    name? : any,
    color? : string
    size? :number
    customStyle? : object
    extraTitle? : any
    text? : string
    source? : ImageSourcePropType
    overrideStyle? : object
    albumsRenderData? : any
    tracksRenderData? : any
    playlistRenderData? :any
    item? : any
    albumId? :any
    visible? : boolean
    sharingPress? : any
    pressCancel? : any
} 