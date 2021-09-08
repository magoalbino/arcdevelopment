import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { Tabs, Tab, Button, Menu, MenuItem } from "@material-ui/core";
import { Link } from "react-router-dom";

import { useStyles } from "./styles";
import { useRoutes } from "../../../Hooks/Routes/useRoutes";

export function HeaderTabs() {
  const classes = useStyles();
  const {
    tabValue,
    setTabValue,
    selectedMenuIndex,
    setSelectedMenuIndex,
    menuOptions,
    pageList,
  } = useRoutes();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openMenu, setOpenMenu] = useState(false);

  const handleChangeTab = (e: ChangeEvent<{}>, value: number) => {
    setTabValue(value);
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleMenuItemClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    i: number
  ) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedMenuIndex(i);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  return (
    <>
      <Tabs
        className={classes.tabContainer}
        value={tabValue}
        onChange={handleChangeTab}
      >
        {pageList.map((page, index) =>
          index !== 5 ? (
            <Tab
              key={page.link}
              label={page.name}
              component={Link}
              to={page.link}
              aria-owns={anchorEl ? "simple-menu" : undefined}
              aria-haspopup={anchorEl ? "true" : undefined}
              onMouseOver={index === 1 ? handleClick : undefined}
            />
          ) : (
            ""
          )
        )}
      </Tabs>
      <Button variant="contained" color="secondary" className={classes.button}>
        Free Estimate
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        classes={{ paper: classes.menu }}
        elevation={0}
        style={{ zIndex: 1302 }}
      >
        {menuOptions.map((option, i) => (
          <MenuItem
            key={option.name}
            onClick={(event: React.MouseEvent<HTMLAnchorElement>) => {
              handleMenuItemClick(event, i);
              setTabValue(1);
              handleClose();
            }}
            component={Link}
            to={option.link}
            selected={i === selectedMenuIndex && tabValue === 1}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
