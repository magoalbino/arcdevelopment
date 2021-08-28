import React, { ChangeEvent, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {Button, useScrollTrigger, Toolbar, AppBar, useMediaQuery, useTheme} from "@material-ui/core";
import {useStyles} from "./styles";

import logo from '../../../assets/logo.svg';
import { HeaderTabs } from './HeaderTabs';

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
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
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
                        {
                            matches 
                            ? null 
                            : <HeaderTabs 
                                tabValue={tabValue} 
                                setTabValue={setTabValue}
                                handleClick={handleClick} 
                                handleChangeTab={handleChangeTab}
                                anchorEl={anchorEl}
                                menuOpen={menuOpen}
                                handleClose={handleClose}
                                handleMenuItemClick={handleMenuItemClick}
                                selectedMenuIndex={selectedMenuIndex}
                              />
                        }
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin}></div>
        </>
    )
}