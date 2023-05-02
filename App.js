import { ThemeProvider } from 'styled-components';
import themes from './src/theme'
import Home from './src/Home';
import { useColorScheme } from 'react-native';

export default function App() {

  const deviceTheme = useColorScheme(); // dark, light, null, undefined
  const theme = themes[deviceTheme] || theme.dark

  return (
    <ThemeProvider theme={theme}>
      <Home/>
    </ThemeProvider>
  );
}

