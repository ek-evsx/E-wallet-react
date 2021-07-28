import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  :root {
    --gray: #727272;
    --dark-gray: #555555;
    --light-gray: #bfbfbf;

    --base-background: #eee;

    --white: #fff;

    --light-purple: #CDC5F9;
    --purple-lighter: #d1cbf6;
    --purple: #9481f9;

    --blue: #0066cc;
    --light-blue: #0080ff;
    --blue-lighter: #6ab4ff;

    --aqua: #00cc9f;
    --light-aqua: #00f0bb;
    --aqua-lighter: #78ffe1;

    --red: #f6004c;
  };

  body {
    font-size: 14px;
    background-color: var(--base-background);
    color: var(--gray);
    margin: 0;
    font-family: Arial;
  }
`;
