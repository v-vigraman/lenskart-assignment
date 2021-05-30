import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FF4500',
    },
    secondary: {
      main: '#ffffff',
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;