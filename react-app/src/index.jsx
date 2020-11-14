import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#041930",
      light: "#0E385F",
    },
    secondary: {
      main: "#64DDA0",
      dark: "#63C296",
    },
    success: {
      main: "#64DDA0",
    },
    info: {
      main: "#D9E8E0",
    },
    warning: {
      main: "#F9CB40",
    },
    error: {
      main: "#FF3D1F",
    },
  },
  typography: {
    fontFamily: "Montserrat",
  },
});

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
