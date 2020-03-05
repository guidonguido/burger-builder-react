import React from 'react'
import classes from './PriceTable.module.css'

const PriceTable = (props) => {
    

    const formatter = new Intl.NumberFormat('it-IT', {
        style: 'currency',
        currency: 'EUR'
      });

    const price = formatter.format(props.price);
     
    const ingredients = Object.keys(props.ingredients).map((ingredient, i)=>
    {
       return( <li key={i}><span>{ingredient}</span> x{props.ingredients[ingredient]}</li>);
    });

    const activeOrder = () => {
        for(let ingredient in props.ingredients)
            if(props.ingredients[ingredient] > 0) return true;

        return false;
    };  

    const orderButton = activeOrder()? <button className={classes.OrderBtn} onClick={props.ordered}> Ordina Ora </button> 
        : <button className={classes.OrderBtn} disabled={true}> Aggiungi Ingredienti </button>;
    

    return(
    <div className={classes.PriceTable}>   
<section>

            <div className={classes.row}>
                <div className={classes.col_md_4}>
                
                    <div className={classes.generic_content}>
                        
                        <div className={classes.generic_head_price}>
                        
                            <div className={classes.generic_head_content}>
                            
                                <div className={classes.head_bg}></div>
                                <div className={classes.head}>
                                    <span>Burger by Guido</span>
                                </div>
                                
                            </div>
                            
                            <div className={classes.generic_price_tag}>    
                                <span className={classes.price}>
                                    <span className={classes.sign}>€</span>
                                    <span className={classes.currency}>{price}</span>
                                </span>
                            </div>
                            
                        </div>                            
                        
                        <div className={classes.generic_feature_list}>
                            <ul>
                               {ingredients}
                            </ul>
                        </div>

                        <div className={classes.generic_price_btn}>
                            {orderButton}
                        </div>
                        
                    </div>
                        
                </div>
                
                
                
            </div>  
            

    </section>             
    
</div>)
}

export default PriceTable;