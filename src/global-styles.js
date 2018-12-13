import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    text-align: center;
  }

  body {
    /* font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; */
    font-family: Georgia;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  h1 {
    font-size: 20px;
    font-weight: 600;
    text-align: center;
  }
`;

export default GlobalStyle;
