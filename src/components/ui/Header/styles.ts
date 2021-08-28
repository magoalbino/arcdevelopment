import {makeStyles, createStyles} from "@material-ui/core/styles";

// @ts-ignore
export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "3rem"
    },
    logo: {
        height: "7.2em"
    },
    tabContainer: {
        marginLeft: 'auto',
        '& .MuiButtonBase-root': { //Tab
            ...theme.typography.tab,
            minWidth: 10,
            marginLeft: '25px',
            lineHeight: '5.75rem',
        }
    },
    button: { 
        ...theme.typography.estimate,
        borderRadius: '50px',
        marginLeft: '50px',
        marginRight: '25px',
        height: '45px',
    },
    logoContainer: { 
        padding: 0,
        "&:hover": {
            backgroundColor: 'transparent',
        }
    },
    menu: { 
        backgroundColor: theme.palette.common.blue,
        color: "white",
        borderRadius: 0,
        '& .MuiMenuItem-root': {
            ...theme.typography.tab,
            opacity: 0.7,
            '&:hover': {
                opacity: 1
            }
        }
    }
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