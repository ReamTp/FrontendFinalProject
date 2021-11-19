import { ThemeHookProps } from "../global/theme";
import { DefaultContentProps } from "./common";

export type MainLayoutProps = DefaultContentProps & {
    hookTheme: ThemeHookProps
}

export type ShoppingLayoutProps = DefaultContentProps & {}