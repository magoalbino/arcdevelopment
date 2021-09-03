import { SetStateAction, Dispatch } from "react";
import {
  SwipeableDrawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";

import { useStyles } from "./styles";
import { menuOptions, pageList } from "../config";
import { Link } from "react-router-dom";

interface Process extends NodeJS.Process {
  browser: boolean;
}

interface HeaderDrawerProps {
  openDrawer: boolean;
  setOpenDrawer: Dispatch<SetStateAction<boolean>>;
}

export function HeaderDrawer({ openDrawer, setOpenDrawer }: HeaderDrawerProps) {
  const iOS =
    (process as Process).browser &&
    /iPad|iPhone|iPad|iPod/.test(navigator.userAgent);

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
        <List disablePadding>
          {pageList.map((page, i) => (
            <ListItem
              divider
              button
              key={page.name}
              component={Link}
              to={page.link}
              onClick={() => setOpenDrawer(false)}
            >
              <ListItemText disableTypography>{page.name}</ListItemText>
            </ListItem>
            // <MenuItem
            //   key={option.name}
            //   onClick={(event: React.MouseEvent<HTMLAnchorElement>) => {
            //     handleMenuItemClick(event, i);
            //     setTabValue(1);
            //     handleClose();
            //   }}
            //   component={Link}
            //   to={option.link}
            //   selected={i === selectedMenuIndex && tabValue === 1}
            // >
            //   {option.name}
            // </MenuItem>
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
