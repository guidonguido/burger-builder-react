import React from 'react';
import Auxiliary from '../Auxiliary/Auxiliary';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/ToolbarBurger';

const Layout = (props) => (
    <Auxiliary>
        <Toolbar/>
        <div>Toolbar, SideDrawer, Backdrop</div>
        
        <main className={classes.Content}>
                {props.children} 
        </main>
    </Auxiliary>

)

export default Layout;