import React from 'react';
import classes from './BuildControl.module.css';

const BuildControl = (props) => (
    
    <div className = {classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.More}
                onClick={props.addIngredient}>Aggiungi </button>
        <button className={classes.Less}
                onClick={props.removeIngredient}
                disabled={props.disabled}>Rimuovi</button>


    </div>
)

export default BuildControl;