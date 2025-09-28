import { Routes, Route } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { Home } from "./pages/Home"
import { Details } from "./pages/Details"
import { useTheme } from "./contexts/ThemeContext"
import { GlobalStyle } from "./styles/global"
import { lightTheme, darkTheme } from "./styles/themes"

function App() {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:name" element={<Details />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App
