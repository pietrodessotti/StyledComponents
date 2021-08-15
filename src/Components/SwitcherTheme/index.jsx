import React from 'react';
import ThemeOn from '../../assets/images/themeOn.svg';
import ThemeOff from '../../assets/images/themeOff.svg';
import { IconStyled } from '../UI';

const clear = <IconStyled src={ThemeOn } alt="Tema Claro" />;
const dark = <IconStyled src={ThemeOff } alt="Tema Escuro" />;

export default ({theme} ) => (theme ? dark : clear);