import React, { useState } from "react";
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from "./Components/GlobalStyle";
import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";

import {  clearTheme, darkTheme } from './Components/UI/themes';
import { AlterThemeButtonStyled } from "./Components/UI";
import SwitcherTheme from "./Components/SwitcherTheme";

function App() {
  const [theme, setTheme] = useState(true);
  const toogle = () => {
    setTheme((theme) => !theme);
  }

  return (
   <ThemeProvider theme={theme ? darkTheme : clearTheme}>
      <GlobalStyle/>
      <AlterThemeButtonStyled onClick={toogle}>
        <SwitcherTheme theme={theme} />
      </AlterThemeButtonStyled>
      <Cabecalho />
      <Container />
   </ThemeProvider>
  );
}

export default App;
