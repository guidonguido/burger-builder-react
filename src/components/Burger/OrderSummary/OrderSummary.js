import React from 'react';
import classes from './OrderSummary.module.css';
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {
  const formatter = new Intl.NumberFormat('it-IT', {
    style: 'currency',
    currency: 'EUR'
  });

  const price = formatter.format(props.price);

  const ingredients = Object.keys(props.ingredients).map((ingredient, i) => {
    return (<li key={i}><span>{ingredient}</span> x{props.ingredients[ingredient]}</li>);
  });

  return (
    <div className={classes.Product}>
      <div className={classes.ux_card}>
        <span className={classes.title}>Guidos Burger</span>
        <span className={classes.price}>
          {price}
        </span>
        <span className={classes.attr}>
          <ul>{ingredients}</ul>
        </span>
      </div>
      <span className={classes.attr}>
      <Button btnType='Danger' clicked={props.danger}>ANNULLA</Button>
      <Button btnType='Success' clicked={props.success}>CONTINUA</Button></span>
    </div>
  )
}
export default OrderSummary;