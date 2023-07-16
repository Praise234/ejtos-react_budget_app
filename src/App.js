import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import { AppProvider } from './context/AppContext';
import AllocationForm from './components/AllocationForm';
import ExpenseList from './components/ExpenseList';
import CurrencyDropdown from './components/CurrencyDropdown';



const App = () => {
    return (
        <AppProvider>
            <div className='container-fluid'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        {/* Budget component */}
                        <div className='col-sm'>
                            <Budget />
                        </div>       

                        {/* Remaining component */}
                        <div className='col-sm'>
                            <Remaining />
                        </div>      

                        {/* ExpenseTotal component */}
                        <div className='col-sm'>
                            <ExpenseTotal />
                        </div> 
                        
                        {/* CurrencyDropdown component */}
                        <div className='col-sm'>
                            <CurrencyDropdown />
                        </div> 
                        
                        {/* ExpenseList component */}
                        <ExpenseList />
                              
                        {/* AllocationForm component */}
                        <AllocationForm />      

                        {/* Add AllocationForm component here under */}        

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
