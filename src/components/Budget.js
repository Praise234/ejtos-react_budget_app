import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, dispatch, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const stepHandler = (event) => {
        if(event.target.value > 20000){
            alert("Budget cannot exceed 20000");
            return;
        }
        if(event.target.value < totalExpenses){
            alert("You cannot reduce the budget value lower than the spending");
            return;
        }
        setNewBudget(event.target.value); 
    }
    
    useEffect(() =>{
        dispatch({type: 'SET_BUDGET', payload: newBudget})
    }, [dispatch, newBudget]);
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}  <input
                        type='number'
                        id='budget'
                        value={newBudget}
                        max={20000}
                        step={10}
                        style={{ marginLeft: '.2rem' , size: 10}}
                        onChange={stepHandler}
                        >

                        </input></span>
        </div>
    );
};
export default Budget;
