import { useState } from "react"
import { Theme } from "../types/global/theme";

function useDarkMode() {
    const themeValue = localStorage.getItem('theme') as Theme || 'light';

    const [theme, setTheme] = useState<Theme>(themeValue);

    function changeTheme() {
        if (theme === 'light') {
            setTheme('dark')
            typeof(localStorage) != 'undefined' && localStorage.setItem('theme', 'dark')
        } else if (theme === 'dark') {
            setTheme('light');
            typeof(localStorage) != 'undefined' && localStorage.setItem('theme', 'light')
        }
    }

    return [theme, changeTheme] as const;
}

export default useDarkMode;