import { ReactNode } from "react";

export interface IHome {
    children? : ReactNode
    onPress? : () => void
    navigation? : any
} 