import React from 'react';
import Logo from '../../Logo/Logo';
import classes from './SideDrawer.module.css';
import { List, Grid, ListItem, ListItemIcon, ListItemText, Divider, Tabs, Tab, Drawer } from "@material-ui/core";
import { InboxIcon } from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const SideDrawer = (props) => {
  return (
    <div>
      <Drawer open={props.open} onClose={props.close} className={classes.SideDrawer} classes={{
          paper: classes.SideDrawer,
        }}>
        <Grid justify={'flex-start'} spacing={100} container direction='column' className={classes.Grids}>
          <Grid  item xs={3} >
            <div className={classes.Logo}>
              <Logo></Logo>
            </div>
          </Grid>
          <Grid  item xl >
            <Grid container justify={'flex-end'}>
              <Tabs
                value={props.value}
                indicatorColor="primary"
                textColor="primary"
                onChange={props.handleChange}
                aria-label="disabled tabs example"
                orientation='vertical'

              >
                <Tab label="Burger Builder" />
                <Tab label="CheckOut" />
              </Tabs>
           </Grid>
           </Grid>
          
        </Grid>
      </Drawer>

    </div>
  );
};

export default SideDrawer;