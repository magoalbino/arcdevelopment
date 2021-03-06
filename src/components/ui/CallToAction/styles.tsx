import { makeStyles, createStyles } from "@material-ui/core/styles";

import background from "../../../assets/background.jpg";
import mobileBackground from "../../../assets/mobileBackground.jpg";

//aparentemente é meio complicado fazer isso sem o ts-ignore:

// @ts-ignore
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    learnButton: {
      ...theme.typography.learnButton,
      fontSize: "0.7rem",
      height: 35,
      padding: 5,
      [theme.breakpoints.down("sm")]: {
        marginBottom: "2em",
      },
    },
    background: {
      backgroundImage: `url(${background})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      backgroundRepeat: "no-repeat",
      height: "60em",
      width: "100%",
      [theme.breakpoints.down("md")]: {
        backgroundImage: `url(${mobileBackground})`,
        backgroundAttachment: "inherit",
      },
    },
    estimateButton: {
      ...theme.typography.estimate,
      borderRadius: 50,
      height: 80,
      width: 205,
      backgroundColor: theme.palette.common.orange,
      fontSize: "1,5rem",
      marginRight: "5em",
      marginLeft: "2em",
      "&:hover": {
        backgroundColor: theme.palette.secondary.light,
      },
      [theme.breakpoints.down("sm")]: {
        marginRight: 0,
        marginLeft: 0,
      },
    },
  })
);
