import React, { ChangeEvent, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {Button, Tab, Tabs, useScrollTrigger, Toolbar, AppBar} from "@material-ui/core";
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
    const [TabValue, setTabValue] = useState(0);
 
    const handleChangeTab = (e: ChangeEvent<{}>, value: number) => {
        setTabValue(value);
    }

    useEffect( () => {
        if (window.location.pathname === '/' && TabValue !== 0){
            setTabValue(0)
        } else if (window.location.pathname === '/services' && TabValue !== 1){ 
            setTabValue(1)
        } else if (window.location.pathname === '/revolution' && TabValue !== 1){ 
            setTabValue(2)
        } else if (window.location.pathname === '/about' && TabValue !== 1){ 
            setTabValue(3)
        } else if (window.location.pathname === '/contact' && TabValue !== 1){ 
            setTabValue(4)
        } else if (window.location.pathname === '/estimate' && TabValue !== 1){ 
            setTabValue(5)
        }
    }, [])

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
                            value={TabValue}
                            onChange={handleChangeTab}
                        >
                            <Tab label="Home" component={Link} to="/" />
                            <Tab label="Services" component={Link} to="/services" />
                            <Tab label="The Revolution" component={Link} to="/revolution" />
                            <Tab label="About Us" component={Link} to="/about" />
                            <Tab label="Contact Us" component={Link} to="/contact" />
                        </Tabs>
                        <Button variant="contained" color="secondary"
                        className={classes.button}>
                            Free Estimate
                        </Button>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin}></div>
        </>
    )
}