import React, { Component } from 'react';
import { Tab, Tabs, AppBar, Toolbar, Grid } from '@material-ui/core';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import SideDrawer from '../SideDrawer/SideDrawer';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

class ToolbarBurger extends Component {

    state = {
        value: 0,
        drawer: false
    }

    handleChange = (event, newValue) => {
        this.setState({ value: newValue });
    };

    handleMenuButton = () =>{
        const oldDrawer= this.state.drawer;
        const newDrawer = !oldDrawer;
        this.setState({drawer:newDrawer});
    }

    render() {
        return (
            <header>
                <AppBar className={classes.Toolbar} position="static" color="default">
                    <Toolbar>
                        <Grid justify={"space-between"} container className={classes.Grids}>
                            <Grid xs={1} item>
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    onClick={this.handleMenuButton}
                                    edge="start"
                                >
                                    <MenuIcon />
                                </IconButton>
                            </Grid>
                            
                            <Grid xs={5} item>
                                <Grid container justify={"center"}>
                                    <Tabs
                                        className={classes.Tabs}
                                        value={this.state.value}
                                        indicatorColor="primary"
                                        textColor="primary"
                                        onChange={this.handleChange}
                                        aria-label="disabled tabs example"
                                        variant="fullWidth"

                                    >
                                        <Tab label="Burger Builder" value={0}/>
                                    </Tabs>
                                </Grid>
                            </Grid>
                            <Grid xs={1} item className={classes.Grids}>
                                <Logo />
                            </Grid>
                            <Grid xs={5} item>
                                <Grid container justify={"center"}>
                                    <Tabs
                                        className={classes.Tabs}
                                        value={this.state.value}
                                        indicatorColor="primary"
                                        textColor="primary"
                                        onChange={this.handleChange}
                                        aria-label="disabled tabs example"
                                        variant="fullWidth"

                                    >
                                        <Tab label="CheckOut" value={1}/>
                                    </Tabs>
                                </Grid>
                            </Grid>
                        </Grid></Toolbar>
                </AppBar>
                <SideDrawer open={this.state.drawer} close={this.handleMenuButton} value={this.state.value} handleChange={this.handleChange}></SideDrawer>
            </header>

            

            
        )
    }

}

export default ToolbarBurger;