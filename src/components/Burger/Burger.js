import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const Burger = (props) => {

    let trasformedIngredients = Object.keys(props.ingredients).map(ingKey =>
        {
            return[...Array(props.ingredients[ingKey])].map((_,i) =>{
                return <BurgerIngredient key={ingKey+i} type={ingKey}/>
            })
        }).reduce((arr,el) =>
        {
            return arr.concat(el)
        }, []);

    
    if(trasformedIngredients.length === 0)
    {
        trasformedIngredients = <p> Aggiungi degli ingredienti </p>
    }

    return(
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top'/>
            {trasformedIngredients}
            <BurgerIngredient type='bread-bottom'/>
        </div>
    )
}

export default Burger;