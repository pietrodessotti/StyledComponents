import {
  clearBackground,
  clearContent,
  textClearBackground,
  darkBackground,
  darkContent,
  textDarkBackground
} from './variables'



export const clearTheme = {
    body: clearBackground,
    inside: clearContent,
    text: textClearBackground,
    filter: ""
};

export const darkTheme = {
    body: darkBackground,
    inside: darkContent,
    text: textDarkBackground,
    filter: "invert(100%)"
};