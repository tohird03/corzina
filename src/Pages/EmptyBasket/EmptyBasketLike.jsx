import React from 'react';
import "../EmptyBasket/EmptyBasket.css"
import basketImg from "../../Assets/Img/Illustration.png"
import { NavLink } from 'react-router-dom';
import likeImg from "../../Assets/Img/like.png"

const Emptybasketlike = () => {
    return (
        <section>
            <div className="container basket-container">
                <img className='basket__img' src={likeImg} alt="basket img" width="390" height="315" />

                <h3 className='basket__title'>Избранное пуста</h3>

                <p className='basket__desc'>Но это никогда не поздно исправить :)</p>

                <NavLink to="/" className="basket__link">
                    В каталог товаров
                </NavLink>
            </div>
        </section>
);
}

export default Emptybasketlike;
