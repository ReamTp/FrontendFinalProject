import { useState } from "react"
import { Theme } from "../types/global/theme";

function useDarkMode() {
    const [theme, setTheme] = useState<Theme>('light');

    function changeTheme() {
        theme === 'light' ? setTheme('dark') : theme === 'dark' && setTheme('light');
    }

    return [theme, changeTheme] as const;
}

export default useDarkMode;