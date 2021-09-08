import { makeStyles, createStyles } from "@material-ui/core/styles";

//aparentemente é meio complicado fazer isso sem o ts-ignore:

// @ts-ignore
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawerIconContainer: {
      marginLeft: "auto",
      "&:hover": {
        backgroundColor: "transaprent",
      },
    },
    drawerIcon: {
      height: "50px",
      width: "50px",
    },
    drawer: {
      backgroundColor: theme.palette.common.blue,
    },
    drawerItem: {
      ...theme.typography.tab,
      color: "white",
      opacity: 0.7,
    },
    drawerItemSelected: {
      "& .MuiListItemText-root": {
        opacity: 1,
      },
    },
    drawerItemEstimate: {
      backgroundColor: theme.palette.common.orange,
    },
    toolbarMargin: {
      ...theme.mixins.toolbar,
      marginBottom: "3rem",
      [theme.breakpoints.down("md")]: {
        marginBottom: "2em",
      },
      [theme.breakpoints.down("xs")]: {
        marginBottom: "1.55em",
      },
    },
  })
);
