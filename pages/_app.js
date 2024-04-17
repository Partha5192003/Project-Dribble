// pages/_app.js
import "bootstrap/dist/css/bootstrap.min.css";

import { createGlobalStyle } from "styled-components";
import { useState } from "react";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 0;
  }
`;

export default function App({ Component, pageProps }) {
  // Example of global state management setup
  const [globalState, setGlobalState] = useState();

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
