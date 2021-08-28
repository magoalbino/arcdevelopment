import {makeStyles, createStyles} from "@material-ui/core/styles";

// @ts-ignore
export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "3rem",
        [theme.breakpoints.down("md")]: {
            marginBottom: "2em",
        },
        [theme.breakpoints.down("xs")]: {
            marginBottom: "1.55em",
        }
    },
    logo: {
        height: "7.2em",
        [theme.breakpoints.down("md")]: {
            height: "6.2em",
        },
        [theme.breakpoints.down("xs")]: {
            height: "5em",
        }
    },
    logoContainer: { 
        padding: 0,
        "&:hover": {
            backgroundColor: 'transparent',
        }
    },
}));


//https://gist.github.com/Danilo-Araujo-Silva/2ce11fd0540dcc7eb3ad3e67fd75d02a

/**
 If you need more specificity it's best to simply chain more class names.

 const Search = styled(TextInput)({
  width: '100%',
  '& input.MuiInputBase-input.MuiInput-input': {
    background: '#ff00ff',
  },
})
 */