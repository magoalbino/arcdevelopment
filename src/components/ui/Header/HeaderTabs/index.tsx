import { ChangeEvent, Dispatch, SetStateAction } from 'react'
import { Tabs, Tab, Button, Menu, MenuItem } from "@material-ui/core"
import { Link } from 'react-router-dom';

import { useStyles } from './styles';

interface HeaderTabsProps {
  tabValue: number;
  anchorEl: HTMLElement | null;
  menuOpen: boolean;
  setTabValue: Dispatch<SetStateAction<number>>;
  selectedMenuIndex: number;
  handleClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  handleChangeTab: (e: ChangeEvent<{}>, value: number) => void;
  handleClose: () => void;
  handleMenuItemClick: (e: React.MouseEvent<HTMLAnchorElement>, i: number) => void;
 }

export function HeaderTabs({tabValue, setTabValue, handleClick, handleChangeTab, anchorEl, menuOpen, handleClose, handleMenuItemClick, selectedMenuIndex}: HeaderTabsProps) {
    const classes = useStyles();

    const menuOptions = [
        {name: 'Services', link: '/services'},
        {name: 'Custom Software Development', link: '/customsoftware'},
        {name: 'Mobile Apps Development', link: '/mobileapps'},
        {name: 'Website Development', link: '/websites'},
    ]

  return (
  <>
      <Tabs 
          className={classes.tabContainer} 
          value={tabValue}
          onChange={handleChangeTab}
      >
          <Tab label="Home" component={Link} to="/" />
          <Tab 
              aria-owns={anchorEl ? 'simple-menu' : undefined}
              aria-haspopup={anchorEl ? 'true' : undefined}
              onMouseOver={ handleClick }
              label="Services" 
              component={Link} 
              to="/services"
          />
          <Tab label="The Revolution" component={Link} to="/revolution" />
          <Tab label="About Us" component={Link} to="/about" />
          <Tab label="Contact Us" component={Link} to="/contact" />
      </Tabs>
      <Button variant="contained" color="secondary"
      className={classes.button}>
          Free Estimate
      </Button>
      <Menu id="simple-menu" anchorEl={anchorEl} open={menuOpen}
          onClose={handleClose}
          MenuListProps={{onMouseLeave: handleClose}}
          classes={{paper: classes.menu}}
          elevation={0}
      >
          {
              menuOptions.map((option, i) => (
                  <MenuItem 
                      key={option.name}
                      onClick={(event: React.MouseEvent<HTMLAnchorElement>) => {
                          handleMenuItemClick(event, i)
                          setTabValue(1)
                          handleClose()
                      }} 
                      component={Link} 
                      to={option.link}
                      selected={i === selectedMenuIndex && tabValue === 1}
                  >
                      {option.name}
                  </MenuItem>
              ))
          }
      </Menu>
  </>
)
        }