import { useState, useEffect } from 'react';
import React, { useContext } from 'react';
import { Context } from '../../Context/ProductContext';
import "../Corzina/Corzina.css"
import deleteImg from "../../Assets/Img/delete.png"
import { Link } from 'react-router-dom';
const Corzina = (props) => {

    const { saveCorzinka, setSaveCorzinka } = useContext(Context)
    const {products} = useContext(Context)
    const {savedArr, setSavedArr} = useContext(Context)

    let moneyCounter = []

    saveCorzinka?.map(item => {
        let moneys = (item.money * item.amount)

        moneyCounter.push(Number(moneys))
    })

    let counters = moneyCounter.reduce(function(a, b) {
        return a + b
    })

    const handleDelete = (id) => {
        setSaveCorzinka(state => state.filter(element => element.id !== id))
    }

    const handlePlus = (e) => {
        let id = e.target.id
        saveCorzinka?.map(item => {
            if(item.id == id){
                item.amount = item.amount + 1
                window.localStorage.setItem('products', JSON.stringify(products))
                if (false) {
                    setSavedArr(state => [...state, item])
                    window.localStorage.setItem('products', JSON.stringify(products))
                }else{
                    setSavedArr(state => [...state])
                }
            }
        })
    }


    const handleMinus = (e) => {
        let id = e.target.id
        saveCorzinka?.map(item => {
            if(item.id == id){

                if (item.amount > 0) {
                    item.amount = item.amount - 1
                    window.localStorage.setItem('products', JSON.stringify(products))
                    if (false) {
                        setSavedArr(state => [...state, item])
                        window.localStorage.setItem('products', JSON.stringify(products))
                    }else{
                        setSavedArr(state => [...state])
                    }
                }else{
                    item.amount = 0
                }
            }
        })
    }

    return (
        <section>
            <div className="container">
                <h2>Корзина</h2>
                <div className='corzina__total-shops'>


                    <div>
                        <ul className='corzina__list'>
                            {
                                saveCorzinka?.map(item => {
                                    return <li className='corzina__item' key={Math.random()}>
                                        <div className='corzina__card-header'>
                                            <div className='corzina__card-title'>
                                                <img className='corzina__img' src={item.img} alt="" />

                                                <div>
                                                    <h3 className='corzina__product-title'>{item.title}</h3>
                                                    <p className='corzina__product-desc'>{item.money} cyм</p>
                                                </div>
                                            </div>

                                            <button onClick={() => handleDelete(item.id)} className='corzina__delete'>
                                                <img src={deleteImg} alt="" />
                                            </button>
                                        </div>

                                        <div className='corzina__card-body'>
                                            <div className='corzina__shops'>
                                                <button onClick={e => handleMinus(e)} id={item.id} className='corzina__btn-shop'>-</button>
                                                <p className='corzina__shop-counter'>{item.amount}</p>
                                                <button onClick={e => handlePlus(e)} id={item.id} className='corzina__btn-shop'>+</button>
                                            </div>

                                            <h5 className='corzina__shop-money'>{item.money * item.amount} cyм</h5>
                                        </div>
                                    </li>
                                })
                            }
                        </ul>

                        <div className='corzina__delivery'>
                            <h3 className='corzina__delivery-heading'>Доставка</h3>

                            <iframe className='contact__location-map'
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.626762389675!2d69.26962081519574!3d41.338728779268585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b5bc3472597%3A0xb7a352920b7c168a!2z0KLQvtGA0LPQvtCy0YvQtSDQoNGP0LTRiyAi0JzQsNC70LjQutCwIg!5e0!3m2!1sru!2s!4v1647167212785!5m2!1sru!2s"
                                width="585"
                                height="175"
                                frameBorder="0"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                aria-hidden="false"
                                tabIndex="0"
                            />
                        </div>
                    </div>

                    <div className='corzina__delivery-total'>
                        <div className='corzina__total'>
                            <h4 className='corzina__total-heading'>ИТОГО</h4>
                            <p className='corzina__total-desc'>{counters} cyм</p>
                        </div>

                        <Link to="/checkout" className='corzina__total-btn'>
                            Перейти к оформлению
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Corzina;
