import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary'
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import PriceTable from '../../components/Burger/BuildControls/PriceTable/PriceTable';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

import classes from './BurgerBuilder.module.css'


const INGREDIENT_TYPES = {
    salad: 0.5,
    meat: 1.2,
    cheese: 0.7,
    bacon: 0.8
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            meat: 0,
            cheese: 0,
            bacon: 0
        },

        totalPrice: 4.00,
        purchasing: false
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
        alert('Andiamo Avanti!');
    }

    render() {
        const disabledInfo = { ...this.state.ingredients };
        for (let key in disabledInfo) {
        disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return (
            <Auxiliary>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary price={this.state.totalPrice}
                        ingredients={this.state.ingredients}
                        danger={this.purchaseCancelHandler}
                        success={this.purchaseContinueHandler}>
                    </OrderSummary></Modal>
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
        )
    }
}

export default BurgerBuilder;