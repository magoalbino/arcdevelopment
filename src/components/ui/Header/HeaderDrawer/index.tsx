import { SetStateAction, Dispatch } from "react";
import { SwipeableDrawer, IconButton } from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";

import { useStyles } from "./styles";

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
      >
        Example Drawer
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
