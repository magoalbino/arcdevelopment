import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  useScrollTrigger,
  Toolbar,
  AppBar,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { HeaderTabs } from "./HeaderTabs";
import { useStyles } from "./styles";

import logo from "../../../assets/logo.svg";
import { HeaderDrawer } from "./HeaderDrawer";
import { useRoutes } from "../../Hooks/Routes/useRoutes";

interface Props {
  children: React.ReactElement;
}

function ElevationScroll(props: Props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export function Header() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const { setTabValue } = useRoutes();

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar disableGutters>
            <Button
              component={Link}
              to="/"
              className={classes.logoContainer}
              onClick={() => setTabValue(0)}
              disableRipple
            >
              <img src={logo} alt="company logo" className={classes.logo} />
            </Button>
            {matches ? <HeaderDrawer /> : <HeaderTabs />}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin}></div>
    </>
  );
}
