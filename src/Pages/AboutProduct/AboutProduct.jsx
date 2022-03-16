import React, { useContext } from 'react';
import { Context } from '../../Context/ProductContext';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import "../AboutProduct/AboutProduct.css"
import savedImg from "../../Assets/Img/Vector.png"
import savedBlackImg from "../../Assets/Img/vektorblack.png"
import shopping from "../../Assets/Img/savat.png"
import Corzina from '../Corzina/Corzina';
const Aboutproduct = () => {
    const x = useParams()


    let [productsAbout, setProductsAbout] = useState([])
    let [productsCorzina, setProductsCorzina] = useState([])

    const {products} = useContext(Context)
    const {savedArr, setSavedArr} = useContext(Context)
    const {corzinLenth, setCorzinLength} = useContext(Context)

    const handleSaved = (e) => {
        let id = e.target.id
        products?.map(item => {
            if(item.id == id){
                item.isSaved = !item.isSaved
                window.localStorage.setItem('products', JSON.stringify(products))

                if (item.isSaved) {
                    setSavedArr(state => [...state, item])
                    window.localStorage.setItem('products', JSON.stringify(products))
                }else{
                    setSavedArr(state => state.filter(element => element.id !== item.id))
                }
            }
        })
    }

    useEffect(() => {
        fetch(`https://shoppings-corzina.herokuapp.com/posts/${x.productId}`)
            .then(res => res.json())
            .then(data => setProductsAbout(data))
    }, [])


    const {saveCorzinka, setSaveCorzinka} = useContext(Context)

    useEffect(() => {
        window.localStorage.setItem('product', JSON.stringify(saveCorzinka))
    }, [saveCorzinka])

    JSON.parse(window.localStorage.getItem('corzina'))

    const handleAddCorzina = (e) => {
        products?.map(item => {
            if (e.target.id == item.id && !saveCorzinka.includes(item)) {
                saveCorzinka.push(item);
                window.localStorage.setItem('corzina', JSON.stringify(saveCorzinka));
            }
        });

        setCorzinLength(saveCorzinka.length);
    }

    const handleKupit = (e) => {
        products?.map(item => {
            if(item.id == e.target.id && !saveCorzinka.includes(item)){
                setSaveCorzinka(context => [...context, item])
            }
        })
    }


    return (
        <section>
            <div className="d-none">
                <Corzina productsCorzina={productsCorzina} />
            </div>
            <div className="container">
                <div>
                    <h2 className='producti__about-title'>{productsAbout?.category}</h2>

                    <div className='product'>
                        <button id={productsAbout.id} onClick={e => handleSaved(e)} className='product__save'>
                            <img id={productsAbout.id} src={savedImg} alt="" />
                        </button>
                        <div className='product__imgs'>
                            <img className='product__img' src={productsAbout?.img} alt="" />

                            <div>
                                {
                                    productsAbout?.imgCategory?.map(imgLink => {
                                        return <img className='product__img-two' key={Math.random()} src={imgLink} alt="" />
                                    })
                                }
                            </div>

                            <h4 className='product__about'>{productsAbout?.desc}</h4>
                        </div>

                        <div className='product__desc'>
                            <h4 className='product__title'>{productsAbout?.title}</h4>
                            <p className='product__money'>{productsAbout?.money}</p>
                        </div>
                    </div>

                    <div className='product__shopping'>
                        <div className="product-categories">
                            <h2 className="product-categories__title">
                                Описание и характеристики
                            </h2>

                            <ul className="product-categories__list">
                                {
                                    productsAbout?.characteristics?.map(item => {
                                        for (let [keys, value] of Object.entries(item)) {
                                            return <li key={Math.random()} className='product-categories__item'>
                                                {keys}: {value}
                                            </li>
                                        }
                                    })
                                }
                            </ul>
                        </div>

                        <div>
                            <Link onClick={e => handleKupit(e)} id={productsAbout.id} to="/corzina" className='product__shop'>Купить!</Link>
                            <button id={productsAbout?.id} onClick={(e) => handleAddCorzina(e)} className='product__shop'>
                                <img className='product__shop-img' src={shopping} alt="" />
                                Добавить в корзину
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Aboutproduct;
