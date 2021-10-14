import { createGlobalStyle } from 'styled-components';
import Berlin from './assets/fonts/Berlin.ttf';
import JosefinLight from './assets/fonts/JosefinSans-Light.ttf';
import JosefinExtraLight from './assets/fonts/JosefinSans-ExtraLight.ttf';
import JosefinThin from './assets/fonts/JosefinSans-Thin.ttf';
import JosefinReg from './assets/fonts/JosefinSans-Regular.ttf';
import Violaceous from './assets/fonts/Violaceous.ttf';

/** THEME-PROVIDER **/
export const mainTheme = {
  pitchBlack: "#000",
  black: "#111",
  primaryColor: "#c57f2a",
  offWhite: "#f1f1f1"
};

export const GlobalStyle = createGlobalStyle`
/** GET FONTS **/
@font-face {
    font-family: 'berlin';
    src: url(${Berlin});
}
@font-face {
    font-family: 'josefinXlight';
    src: url(${JosefinExtraLight});
}
@font-face {
    font-family: 'josefinL';
    src: url(${JosefinLight});
}
@font-face {
    font-family: 'josefinReg';
    src: url(${JosefinReg});
}
@font-face {
    font-family: 'josefinThin';
    src: url(${JosefinThin});
}
@font-face {
    font-family: 'violaceous';
    src: url(${Violaceous});
}

    *,
    ::after,
    ::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }
    
    html {
      font-size: 62.5%;
    }
    
    body {
      box-sizing: border-box;
      font-family: 'josefinL';
    }
    
    a {
      text-decoration: none;
    }
    
    ul, li {
      list-style: none;
    }
`;