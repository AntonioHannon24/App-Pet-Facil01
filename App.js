import React,{ useState } from 'react';
import { View } from 'react-native';
import { ThemeProvider } from 'styled-components';
import themes from './src/theme'
import Home from './src/Home';
import { SwitchTheme } from './styles';

export default function App() {

  const [isEnabled, setIsEnabled] = useState("dark");
  const [backgroundTheme, setBackgroundTheme ] = useState('light')
  
  //função que muda o background 
  const toggleSwitch = () =>{ setIsEnabled(previousState => !previousState);
          setBackgroundTheme(previousState => previousState === "dark" ? "light":"dark")
  };
  
  const theme = themes[backgroundTheme]

  return (
    <ThemeProvider theme={theme}>
      <View style={{height:80}}>
          <SwitchTheme 
            trackColor={{false: 'white', true: 'dark'}}
            thumbColor={isEnabled ? 'white' : 'dark'}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
      </View>
      <Home/>
    </ThemeProvider>
  );
}

