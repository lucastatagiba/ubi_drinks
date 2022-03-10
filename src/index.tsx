import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { DrinksProvider } from "./contexts/drinksProvider";
import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const overrides = extendTheme({
  styles: {
    global: (props: any) => ({
      body: {
        fontFamily: "body",
        color: mode(
          getComputedStyle(
            document.querySelector(":root") as Element
          ).getPropertyValue("--brown"),
          getComputedStyle(
            document.querySelector(":root") as Element
          ).getPropertyValue("--beige")
        )(props),
        bg: mode(
          getComputedStyle(
            document.querySelector(":root") as Element
          ).getPropertyValue("--gray-1"),
          getComputedStyle(
            document.querySelector(":root") as Element
          ).getPropertyValue("--darkmode")
        )(props),
        lineHeight: "base",
      },
    }),
  },
});

const theme = extendTheme({
  config,
});
ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={overrides}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <DrinksProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </DrinksProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
