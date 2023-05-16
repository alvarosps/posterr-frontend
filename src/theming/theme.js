import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1DA1F2',
        },
        secondary: {
            main: '#657786',
        },
        error: {
            main: '#E0245E',
        },
        background: {
            default: '#F5F8FA',
            paper: '#FFFFFF', // Twitter's post background color
        },
        text: {
            primary: '#14171A',
            secondary: grey[600],
        },
    },
    typography: {
        fontFamily:
            'Helvetica Neue, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
        fontSize: 14,
    },
    shape: {
        borderRadius: 15,
    },
    components: {
        MuiContainer: {
            styleOverrides: {
                root: {
                    width: '600px',
                    margin: '0 auto',
                    padding: '20px',
                    backgroundColor: 'background.default',
                },
            },
        },
    },
    mixins: {
        appHeader: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '20px',
            h1: {
                fontSize: '20px',
                fontWeight: 'bold',
            },
        },
    },
});

export default theme;
