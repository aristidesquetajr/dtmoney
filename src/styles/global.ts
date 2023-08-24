import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --red: #F75A68;
    --red-dark: #AA2834;

    --green: #00875F;
    --green-dark: #015F43;
    --green-light: #00B37E;

    --background: #121214;

    --shape-1th: #202024;
    --shape-2sn:#29292E;
    --shape-3rd: #323238;

    --placeholder: #7C7C8A;
    --text-base: #C4C4CC;
    --text-title: #E1E1E6;

    --white: #FFFFFF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    -webkit-font-shoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: Roboto, sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

`
