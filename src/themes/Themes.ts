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
        titleSecondary: string
        warning: string
        success: string
        danger: string
        info: string
        warningHover: string
        successHover: string
        dangerHover: string
        infoHover: string
        shadowColor: string
        blackTransparent: string
        yellow: string
    }
}

const LightTheme: DefaultTheme = {
    primaryColor: '#F7F8F9',
    secondaryColor: '#FFFFFF',
    tertiaryColor: '#e6ebf1',
    appName: '#C9284F',
    border: '#ccc',
    borderHover: '#80bdff',
    text: '#444C63',
    textHover: '#1c202b',
    title: '#FF6766',
    titleSecondary: 'rgb(255, 0, 0)',
    warning: '#FFC107',
    success: '#28A745',
    danger: '#DC3545',
    info: '#17A2B8',
    warningHover: '#E0A800',
    successHover: '#218838',
    dangerHover: '#C82333',
    infoHover: '#138496',
    shadowColor: 'rgba(30, 30, 30, 0.12)',
    blackTransparent: 'rgba(0, 0, 0, 0.25)',
    yellow: 'rgb(255, 227, 179)'
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
    titleSecondary: 'rgb(253, 33, 33)',
    warning: '#FFC107',
    success: '#4EE671',
    danger: '#D95561',
    info: '#5197B5',
    warningHover: '#CFA834',
    successHover: '#3EC95D',
    dangerHover: '#AB3E48',
    infoHover: '#37638A',
    shadowColor: 'rgba(204, 204, 204, 0.25)',
    blackTransparent: 'rgba(0, 0, 0, 0.5)',
    yellow: 'rgb(255, 227, 182)'
};

const Themes = {
    light: LightTheme,
    dark: DarkTheme,
};

export default Themes;