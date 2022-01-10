import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core';
import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';
import Login from 'views/Login';
import "./index.css";

const Theme = responsiveFontSizes(createTheme({
  palette: {
    primary: {
      main: "#3E83FF"
    },
    secondary: {
      main: "#28DC8E"
    }
  },
  shape: {
    borderRadius: 8
  },
  
}))

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <Login />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);