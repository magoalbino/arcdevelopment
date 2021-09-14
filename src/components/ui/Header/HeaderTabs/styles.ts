import { makeStyles, createStyles } from "@material-ui/core/styles";

// @ts-ignore
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tabContainer: {
      marginLeft: "auto",
      "& .MuiButtonBase-root": {
        //Tab
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: "25px",
        lineHeight: "5.75rem",
      },
    },
    button: {
      ...theme.typography.estimate,
      borderRadius: "50px",
      marginLeft: "50px",
      marginRight: "25px",
      height: "45px",
      "&:hover": {
          backgroundColor: theme.palette.secondary.light
      }
    },
    menu: {
      backgroundColor: theme.palette.common.blue,
      color: "white",
      borderRadius: 0,
      "& .MuiMenuItem-root": {
        ...theme.typography.tab,
        opacity: 0.7,
        "&:hover": {
          opacity: 1,
        },
      },
    },
  })
);
