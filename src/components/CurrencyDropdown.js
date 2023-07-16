import React, { useContext, useEffect, useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import { AppContext } from "../context/AppContext";

const CurrencyDropdown = () => {
    const [currencyType, setCurrencyType] = useState("$ Dollar");
    const { dispatch } = useContext(AppContext);
    const currencyChangeHandler = (event) => {
        setCurrencyType(event.target.text)
    }
    useEffect(()=>{
        switch (currencyType) {
            case '$ Dollar':
                dispatch({type:'CHG_CURRENCY', payload: '$'});
                break;
            case '£ Pound':
                dispatch({type:'CHG_CURRENCY', payload: '£'});
                break;
            case '€ Euro':
                dispatch({type:'CHG_CURRENCY', payload: '€'});
                break;
        
            default:
                dispatch({type:'CHG_CURRENCY', payload: '₹'});
                break;
        }
    })
    return (
        <div className="alert alert-secondary">
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Currency({currencyType})
                </Dropdown.Toggle>
                <Dropdown.Menu className="bg-success">
                    <Dropdown.Item onClick={ currencyChangeHandler }>$ Dollar</Dropdown.Item>
                    <Dropdown.Item onClick={ currencyChangeHandler }>£ Pound</Dropdown.Item>
                    <Dropdown.Item onClick={ currencyChangeHandler }>€ Euro</Dropdown.Item>
                    <Dropdown.Item onClick={ currencyChangeHandler }>₹ Ruppee</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}

export default CurrencyDropdown;