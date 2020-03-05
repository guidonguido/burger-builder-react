import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const formatter = new Intl.NumberFormat('it-IT', {
    style: 'currency',
    currency: 'EUR'
  })

const BuildControls = (props) => (
    <div className = {classes.BuildControls}>

        <p>Prezzo totale: {formatter.format(props.price)} </p>

        <BuildControl label='Meat'
                        addIngredient={() => props.addIngredient('meat')}
                        removeIngredient={() => props.removeIngredient('meat')}
                        disabled={props.disabled['meat']}/>
        <BuildControl label='Cheese'
                        addIngredient={() => props.addIngredient('cheese')}
                        removeIngredient={() => props.removeIngredient('cheese')}
                        disabled={props.disabled['cheese']}/>
        <BuildControl label='Bacon'
                        addIngredient={() => props.addIngredient('bacon')}
                        removeIngredient={() => props.removeIngredient('bacon')}
                        disabled={props.disabled['bacon']}/>
        <BuildControl label='Salad'
                        addIngredient={() => props.addIngredient('salad')}
                        removeIngredient={() => props.removeIngredient('salad')}
                        disabled={props.disabled['salad']}/>

    </div>
    
)

export default BuildControls;

