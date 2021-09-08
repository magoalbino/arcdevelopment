import { useState } from "react";
import {
  SwipeableDrawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";

import { useStyles } from "./styles";
import { Link } from "react-router-dom";
import { useRoutes } from "../../../Hooks/Routes/useRoutes";

interface Process extends NodeJS.Process {
  browser: boolean;
}

export function HeaderDrawer() {
  const iOS =
    (process as Process).browser &&
    /iPad|iPhone|iPad|iPod/.test(navigator.userAgent);

  const [openDrawer, setOpenDrawer] = useState(false);
  const { tabValue, setTabValue, pageList } = useRoutes();

  const classes = useStyles();

  return (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin}></div>
        <List disablePadding>
          {pageList.map((page, i) => (
            <ListItem
              divider
              button
              key={page.name}
              component={Link}
              to={page.link}
              onClick={() => {
                setOpenDrawer(false);
                setTabValue(i);
              }}
              classes={{
                selected: classes.drawerItemSelected,
                root:
                  page.link === "/estimate" ? classes.drawerItemEstimate : "",
              }}
              selected={i === tabValue}
            >
              <ListItemText disableTypography className={classes.drawerItem}>
                {page.name}
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </>
  );
}
