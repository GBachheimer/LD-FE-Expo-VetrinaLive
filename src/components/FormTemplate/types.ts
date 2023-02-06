import { GestureResponderEvent } from "react-native";

export type FormTemplateProps = {
    navigation: any,
    children: React.ReactNode,
    title: string | undefined,
    subtitle: string | undefined,
    submitText: string | undefined,
    submitAction: ((event: GestureResponderEvent) => void) | undefined,
    divider: boolean,
    extraOptions: boolean,
    footerText1: string,
    footerText2?: string,
    footerLink: string,
};