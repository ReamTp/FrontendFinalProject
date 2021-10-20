import { ThemeProvider } from 'styled-components'
import useDarkMode from './hooks/useDarkMode'
import AppRouter from './router'
import { GlobalStyles } from './themes/GlobalStyles'
import Themes from './themes/Themes'

const App = () => {
    const [ theme, setDarkMode ] = useDarkMode()

    return (
        <ThemeProvider theme={Themes[theme]}>
            <GlobalStyles />
            <AppRouter theme={theme} setTheme={setDarkMode}/>
        </ThemeProvider>
    )
}

export default App
