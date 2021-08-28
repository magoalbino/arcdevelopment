import React, { ChangeEvent, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {Button, Tab, Tabs, useScrollTrigger, Toolbar, AppBar, Menu, MenuItem} from "@material-ui/core";
import {useStyles} from "./styles";

import logo from '../../../assets/logo.svg';

interface Props {
    children: React.ReactElement;
}

function ElevationScroll(props: Props) {
    const { children } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    })

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    })
}

export function Header() {
    const classes = useStyles();
    const [tabValue, setTabValue] = useState(0);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const [selectedMenuIndex, setSelectedMenuIndex] = useState(0);
 
    const handleChangeTab = (e: ChangeEvent<{}>, value: number) => {
        setTabValue(value);
    }

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => { 
        setAnchorEl(e.currentTarget);
        setMenuOpen(true);
    }

    const handleMenuItemClick = (e: React.MouseEvent<HTMLAnchorElement>, i: number) => {
        setAnchorEl(null)
        setMenuOpen(false)
        setSelectedMenuIndex(i)
    }

    const handleClose = () => { 
        setAnchorEl(null);
        setMenuOpen(false)
    }

    const menuOptions = [
        {name: 'Services', link: '/services'},
        {name: 'Custom Software Development', link: '/customsoftware'},
        {name: 'Mobile Apps Development', link: '/mobileapps'},
        {name: 'Website Development', link: '/websites'},
    ]

    useEffect( () => {

        switch(window.location.pathname){ 
            case '/':
                if (tabValue !== 0){
                    setTabValue(0);
                }
                break;
            case '/services':
                if (tabValue !== 1){
                    setTabValue(1);
                    setSelectedMenuIndex(0)
                }
                break;
            case '/customsoftware':
                if (tabValue !== 1){
                    setTabValue(1);
                    setSelectedMenuIndex(1)
                }
                break;
            case '/mobileapps':
                if (tabValue !== 1){
                    setTabValue(1);
                    setSelectedMenuIndex(2)
                }
                break;
            case '/websites':
                if (tabValue !== 1){
                    setTabValue(1);
                    setSelectedMenuIndex(3)
                }
                break;
            case '/revolution':
                if (tabValue !== 2){
                    setTabValue(2);
                }
                break;
            case '/about':
                if (tabValue !== 3){
                    setTabValue(3);
                }
                break;
            case '/contact':
                if (tabValue !== 4){
                    setTabValue(4);
                }
                break;
            case '/estimate':
                if (tabValue !== 5){
                    setTabValue(5);
                }
                break;
            default:
                break;
        }
    }, [tabValue])

    return (
        <>
            <ElevationScroll>
                <AppBar position="fixed">
                    <Toolbar disableGutters>
                        <Button 
                            component={Link} 
                            to="/" 
                            className={classes.logoContainer}
                            onClick={ () => setTabValue(0)}
                            disableRipple
                        >
                            <img src={logo} alt="company logo" className={classes.logo} />
                        </Button>
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
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin}></div>
        </>
    )
}