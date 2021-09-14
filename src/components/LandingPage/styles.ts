import { makeStyles, createStyles } from "@material-ui/core/styles";

import revolutionBackground from "../../assets/repeatingBackground.svg";
import infoBackground from "../../assets/infoBackground.svg";

//aparentemente é meio complicado fazer isso sem o ts-ignore:

// @ts-ignore
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    animation: {
      maxWidth: "50em",
      minWidth: "21em",
      marginTop: "2em",
      marginLeft: "10%",
      [theme.breakpoints.down("sm")]: {
        maxWidth: "30em",
      },
    },
    estimateButton: {
      ...theme.typography.estimate,
      backgroundColor: theme.palette.common.orange,
      borderRadius: 50,
      height: 45,
      width: 160,
      marginRight: 40,
      "&:hover": {
        backgroundColor: theme.palette.secondary.light,
      },
    },
    buttonContainer: {
      marginTop: 1,
    },
    learnButtonHero: {
      ...theme.typography.learnButton,
      fontSize: "0.9rem",
      height: 45,
      width: 160,
    },
    learnButton: {
      ...theme.typography.learnButton,
      fontSize: "0.7rem",
      height: 35,
      padding: 5,
      [theme.breakpoints.down("sm")]: {
        marginBottom: "2em",
      },
    },
    mainContainer: {
      marginTop: "5em",
      [theme.breakpoints.down("md")]: {
        marginTop: "3em",
      },
      [theme.breakpoints.down("xd")]: {
        marginTop: "2em",
      },
    },
    heroTextcontainer: {
      minWidth: "21.5em",
      marginLeft: "1em",
      [theme.breakpoints.down("xs")]: {
        marginLeft: 0,
      },
    },
    specialText: {
      fontFamily: "Pacifico",
      color: theme.palette.common.orange,
    },
    subtitle: {
      marginBottom: "1em",
    },
    icon: {
      marginLeft: "2em",
      [theme.breakpoints.down("xs")]: {
        marginLeft: 0,
      },
    },
    serviceContainer: {
      marginTop: "12em",
      [theme.breakpoints.down("sm")]: {
        padding: 25,
      },
    },
    revolutionBackground: {
      backgroundImage: `url(${revolutionBackground})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "100%",
      width: "100%",
    },
    revolutionCard: {
      position: "absolute",
      boxShadow: theme.shadows[10],
      padding: "6em",
      borderRadius: 15,
      [theme.breakpoints.down("sm")]: {
        paddingTop: "8em",
        paddingBottom: "8em",
        paddingLeft: 0,
        paddingRight: 0,
        borderRadius: 0,
        width: "100%",
      },
    },
    infoBackground: {
      backgroundImage: `url(${infoBackground})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "100%",
      width: "100%",
    },
  })
);
