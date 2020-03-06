import React from 'react';
import Auxiliary from '../Auxiliary/Auxiliary';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/ToolbarBurger';

const Layout = (props) => (
    <Auxiliary>
        <Toolbar/>
        
        <main className={classes.Content}>
                {props.children} 
        </main>
    </Auxiliary>

)

export default Layout;