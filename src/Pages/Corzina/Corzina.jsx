import { useState, useEffect } from 'react';
import React, { useContext } from 'react';
import { Context } from '../../Context/ProductContext';
import "../Corzina/Corzina.css"
import Emptybasket from '../EmptyBasket/EmptyBasket';
import CorzinaFound from "./CorzinaFound"

const Corzina = (props) => {

    const { saveCorzinka } = useContext(Context)

    return (
        <div>

            {saveCorzinka.length > 0 ? <CorzinaFound/> : <Emptybasket />}
            
        </div>
    );
}

export default Corzina;
