import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#232323',
    },
    secondary: {
      main: '#E13F30',
    },
  },
  typography: {
    fontFamily: 'PT Serif, serif',
  },
});

theme = responsiveFontSizes(theme);

export default theme;