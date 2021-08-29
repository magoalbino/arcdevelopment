import { makeStyles, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() =>
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
  })
);
