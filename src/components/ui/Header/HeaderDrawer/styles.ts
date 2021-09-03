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
      "& .MuiListItemText-root": {
        ...theme.typography.tab,
        color: "white",
      },
    },
  })
);
