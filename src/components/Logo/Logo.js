import React from 'react';
import burgerLogo from '../../assets/images/Burger_logo.png';
import classes from './Logo.module.css';

const Logo = (props) =>(
    <div className={classes.Logo}>
        <img src={burgerLogo} alt='Guidos burger'/> 
    </div>
)

export default Logo;