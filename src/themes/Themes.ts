import { DefaultTheme } from "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        primaryColor: string
        secondaryColor: string
        tertiaryColor: string
        appName: string
        border: string
        borderHover: string
        text: string
        textHover: string
        title: string
        warning: string
        success: string
        danger: string
        info: string
        warningHover: string
        successHover: string
        dangerHover: string
        infoHover: string
        shadowColor: string
    }
}

const LightTheme: DefaultTheme = {
    primaryColor: '#F7F8F9',
    secondaryColor: '#FFFFFF',
    tertiaryColor: '#FFFFFF',
    appName: '#C9284F',
    border: '#ccc',
    borderHover: '#80bdff',
    text: '#444C63',
    textHover: '#1c202b',
    title: '#FF6766',
    warning: '#FFC107',
    success: '#28A745',
    danger: '#DC3545',
    info: '#17A2B8',
    warningHover: '#E0A800',
    successHover: '#218838',
    dangerHover: '#C82333',
    infoHover: '#138496',
    shadowColor: 'rgba(30, 30, 30, 0.12)',
};

const DarkTheme: DefaultTheme = {
    primaryColor: '#192229',
    secondaryColor: '#212E36',
    tertiaryColor: '#2A3B47',
    appName: '#FFFFFF',
    border: '#2A3B47',
    borderHover: '#80bdff',
    text: '#B6BCC0',
    textHover: '#FFFFFF',
    title: '#1292EE',
    warning: '#FFC107',
    success: '#4EE671',
    danger: '#D95561',
    info: '#5197B5',
    warningHover: '#CFA834',
    successHover: '#3EC95D',
    dangerHover: '#AB3E48',
    infoHover: '#37638A',
    shadowColor: 'rgba(204, 204, 204, 0.12)',
};

const Themes = {
    light: LightTheme,
    dark: DarkTheme,
};

export default Themes;