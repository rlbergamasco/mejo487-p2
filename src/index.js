import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core';

let theme = createTheme();
theme = responsiveFontSizes(theme);

theme.typography.h1 = {
  fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
  fontWeight: 300,
  fontSize: '6rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.6rem',
  },
};

theme.typography.h2 = {
  fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
  fontWeight: 300,
  fontSize: '3.75rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.8rem',
  },
};

theme.typography.h6 = {
  fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
  fontWeight: 400,
  fontSize: '1.25rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
  },
};

ReactDOM.render(
  <React.Fragment>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.Fragment>,
  document.getElementById('root')
);