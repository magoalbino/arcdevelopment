import { createTheme } from '@material-ui/core/styles';

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";

declare module "@material-ui/core/styles/createPalette" {
    interface CommonColors {
        blue: string;
        orange: string;
    }
}

declare module "@material-ui/core/styles/createTypography" {
    interface TypographyOptions {
        tab: {};
        estimate: {};
    }
}

export const theme = createTheme({
    palette: {
        common: {
            blue: arcBlue,
            orange: arcOrange
        },
        primary: {
            main: arcBlue
        },
        secondary: {
            main: arcOrange
        }
    },
    typography: {
        tab: {
            fontFamily: 'Raleway',
            textTransform: 'none',
            fontWeight: 700,
            fontSize: '1rem',
        },
        estimate: {
            fontFamily: 'Pacifico',
            fontSize: '1rem', 
            textTransform: 'none', 
            color: 'white',
         }
    }
})