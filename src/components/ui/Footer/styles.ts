import { makeStyles, createStyles } from "@material-ui/core/styles";

// @ts-ignore
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      backgroundColor: theme.palette.common.blue,
      width: "100%",
      zIndex: 1302,
      position: "relative",
    },
    adornment: {
      width: "25rem",
      verticalAlign: "bottom",
      [theme.breakpoints.down("md")]: {
        width: "21em",
      },
      [theme.breakpoints.down("xs")]: {
        width: "15em",
      },
    },
    mainContainer: {
      position: "absolute",
    },
    link: {
      color: "white",
      fontFamily: "Arial",
      fontSize: "0.75rem",
      fontWeight: "bold",
      textDecoration: "none",
    },
    gridItem: {
      margin: "3em",
    },
    icon: {
      width: "4em",
      height: "4em",
      [theme.breakpoints.down("xs")]: {
        height: "2.5em",
        width: "2.5em",
      },
    },
    socialContainer: {
      position: "absolute",
      marginTop: "-6em",
      right: "1.5em",
      [theme.breakpoints.down("xs")]: {
        right: "0.6em",
      },
    },
  })
);
