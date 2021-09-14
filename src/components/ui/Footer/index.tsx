import { useStyles } from "./styles";
import { Grid, Hidden } from "@material-ui/core";
import { Link } from "react-router-dom";

import { useRoutes } from "../../Hooks/Routes/useRoutes";

import footerAdornment from "../../../assets/Footer Adornment.svg";
import facebook from "../../../assets/facebook.svg";
import twitter from "../../../assets/twitter.svg";
import instagram from "../../../assets/instagram.svg";

export function Footer() {
  const classes = useStyles();
  const { setTabValue, setSelectedMenuIndex } = useRoutes();

  return (
    <footer className={classes.footer}>
      {/* mdDown quer dizer que o código dentro da tag será invisível quando atingir o screensize médio para baixo */}
      <Hidden mdDown>
        <Grid
          container
          justifyContent="center"
          className={classes.mainContainer}
        >
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                to="/"
                className={classes.link}
                onClick={() => {
                  setTabValue(0);
                  setSelectedMenuIndex(0);
                }}
              >
                Home
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img
        src={footerAdornment}
        alt="black decorative slash"
        className={classes.adornment}
      />

      <Grid
        container
        justifyContent="flex-end"
        spacing={2}
        className={classes.socialContainer}
      >
        <Grid
          item
          component={"a"}
          href="http://www.facebook.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={facebook} alt="facebook logo" className={classes.icon} />
        </Grid>
        <Grid
          item
          component={"a"}
          href="http://www.twitter.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={twitter} alt="twitter logo" className={classes.icon} />
        </Grid>
        <Grid
          item
          component={"a"}
          href="http://www.instagram.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={instagram} alt="instagram logo" className={classes.icon} />
        </Grid>
      </Grid>
    </footer>
  );
}
