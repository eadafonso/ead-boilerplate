import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    
    @media(max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 
    'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
    outline: none;
  }

  a {
    text-decoration: none;
    color: inherit;
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


  ul,
  ol {
    list-style: none;
  }
`;
