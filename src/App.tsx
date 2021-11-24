import { ThemeProvider } from 'styled-components'
import useDarkMode from './hooks/useDarkMode'
import AppRouter from './router'
import { GlobalStyles } from './themes/GlobalStyles'
import Themes from './themes/Themes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    const [ theme, setDarkMode ] = useDarkMode()

    return (
        <ThemeProvider theme={Themes[theme]}>
            <GlobalStyles />
            <AppRouter theme={theme} setTheme={setDarkMode}/>
            <ToastContainer position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </ThemeProvider>
    )
}

export default App
