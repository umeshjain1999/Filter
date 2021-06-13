import { createGlobalStyle } from "styled-components";
import colors from "./colors";
export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;900&display=swap');
html {
    height: 100%;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    font-size: 1rem;
    color: ${colors.colorsPrimary};
    height: 100%;
    background: ${colors.bgSecondary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    -webkit-text-size-adjust: 100%;

    > #root {
      display: flex;
      flex: 1;
      height: 100%;
    }
  }
`;
