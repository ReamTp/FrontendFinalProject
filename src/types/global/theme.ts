export type Theme = 'light' | 'dark';

export type ThemeHookProps = {
    theme: Theme;
    setTheme: () => void;
}