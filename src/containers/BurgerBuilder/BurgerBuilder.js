import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary'
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import PriceTable from '../../components/Burger/BuildControls/PriceTable/PriceTable';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import CircularProgress from '@material-ui/core/CircularProgress';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

import classes from './BurgerBuilder.module.css'

import axios from 'axios';


const INGREDIENT_TYPES = {
    salad: 0.5,
    meat: 1.2,
    cheese: 0.7,
    bacon: 0.8
}

class BurgerBuilder extends Component {

    state = {
        ingredients:null,
        totalPrice: 4.00,
        purchasing: false,
        confirmed:false,
        error:null
    }

    componentDidMount () {
        axios.get('https://guidos-burger-react.firebaseio.com/ingredients.json').then(response =>{
             this.setState({ingredients:response.data});
        }, error =>{
            this.setState({error:error});
        }
        
        )
    }

    addIngredientHandler = (type) => {
        const newCount = this.state.ingredients[type] + 1;
        const updatedIngredients = { ...this.state.ingredients }
        updatedIngredients[type] = newCount;

        const newPrice = this.state.totalPrice + INGREDIENT_TYPES[type];

        this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
    }

    removeIngredientHandler = (type) => {
        const newCount = this.state.ingredients[type] - 1;

        if (newCount < 0) return;

        const updatedIngredients = { ...this.state.ingredients }
        updatedIngredients[type] = newCount;

        const newPrice = this.state.totalPrice - INGREDIENT_TYPES[type];

        this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true });
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false });
    }

    purchaseContinueHandler = () =>{
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Guidongui',
                address:{
                   
                    street: 'strada1',
                    zipCode: '87040',
                    country: 'Italia'
             
                },
                email: 'gng4ever@hotmail.it'
            },
            deliveryMethod: 'Veloce'
            
        }
        this.setState({confirmed:true});

        axios.post('/orders.json', order).then(response => {
            alert('Ordine Pubblicato');
            this.setState({purchasing:false, confirmed:false})}).catch(
                error => {alert('Si è verificato un errore, Ordine non pubblicato');
                          this.setState({confirmed:false})}
                
            );
    }

    render() {
        

        let burger = this.state.error? <p style={{padding: '50px'}}>Errore nel caricamento degli ingredienti</p> : <CircularProgress/>;
        let modalContent;

        if(this.state.ingredients)
        {   const disabledInfo = { ...this.state.ingredients };
            
            for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
            }

            burger =
            (<Auxiliary>
                    <Burger ingredients={this.state.ingredients} />
                        <div className={classes.BuildSections}>
                            <BuildControls addIngredient={this.addIngredientHandler}
                                removeIngredient={this.removeIngredientHandler}
                                disabled={disabledInfo}
                                price={this.state.totalPrice} />

                            <PriceTable price={this.state.totalPrice}
                                ingredients={this.state.ingredients}
                                ordered={this.purchaseHandler} />


                        </div>
                </Auxiliary>
            ); 
            
            
            

            if(this.state.purchasing){
                if(this.state.confirmed)
                    modalContent= <CircularProgress style={{marginLeft:"200px"}}/>
                else
                    modalContent=
                        <OrderSummary price={this.state.totalPrice}
                                ingredients={this.state.ingredients}
                                danger={this.purchaseCancelHandler}
                                success={this.purchaseContinueHandler}>
                        </OrderSummary>
            }
        }
            

        return (
            <Auxiliary>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {modalContent} 
                </Modal>
                
                {burger}
            </Auxiliary>
        )
    }
}

export default withErrorHandler(BurgerBuilder,axios);