import React, { useEffect, useState, useContext } from 'react';
import { Context } from '../../Context/ProductContext';
import { Link } from 'react-router-dom';
import "../Saved/Saved.css"
import savedImg from "../../Assets/Img/Vector.png"
import savedBlackImg from "../../Assets/Img/vektorblack.png"
import Emptybasketlike from '../EmptyBasket/EmptyBasketLike';
const Saved = () => {

    const { savedArr, setSavedArr } = useContext(Context)
    console.log(savedArr);

    const handleDeleteSave = (id) => {
        setSavedArr(state => state.filter(element => element.id !== id))
    }

    return <div>


        {savedArr.length == 0 ? <Emptybasketlike/> : <section>
            <div className="container">
                <ul className='card__list'>
                    {
                        savedArr?.map(item => {

                            return <li className='card__item' key={Math.random()}>
                                <button onClick={id => handleDeleteSave(item.id)} id={item.id} className='card__icon' data-id={item.id}>
                                    <img id={item.id} className='card__saved' src={savedBlackImg} alt="" />
                                </button>
                                <Link to={`/posts/${item.id}`} className="card__link">
                                    <img className='card__img' src={item.img} alt="" width="220" height="220" />
                                    <div className='card__body'>
                                        <h4 className='card__title'>{item.title}</h4>
                                        <p className='card__desc'>{item.money}</p>
                                    </div>
                                </Link>
                            </li>
                        })
                    }
                </ul>
            </div>
        </section>}
    </div>



}

export default Saved;
