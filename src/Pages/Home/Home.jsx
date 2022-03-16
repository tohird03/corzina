import React, { useContext } from 'react';
import { Context } from '../../Context/ProductContext';
import { Link } from 'react-router-dom';
import "../Home/Home.css"
import savedImg from "../../Assets/Img/Vector.png"
import savedBlackImg from "../../Assets/Img/vektorblack.png"

const Home = () => {

    const {products} = useContext(Context)
    const {savedArr, setSavedArr} = useContext(Context)

    const handleSaved = (evt) => {
        let id = evt.target.id
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

    return (
        <section>
            <div className="container">
                <ul className='card__list'>
                {
                    products?.map(item => {

                        return <li className='card__item' key={item.id}>
                                <button id={item.id}  onClick={(evt) => handleSaved(evt)} className='card__icon' data-id={item.id}>
                                    <img id={item.id} className='card__saved' src={item.isSaved ? savedBlackImg : savedImg} alt="" />
                                </button>
                            <Link to={`/posts/${item.id}`} className="card__link">
                                <img className='card__img' src={item.img} alt="" width="220" height="220" />
                                <div className='card__body'>
                                    <h4 className='card__title'>{item.title}</h4>
                                    <p className='card__desc m-0'>{item.money}</p>
                                </div>

                                <h4 className='card__title fs-6 mt-3'>Category: {item.category}</h4>
                            </Link>
                        </li>
                    })
                }
                </ul>
            </div>
        </section>
    );
}

export default Home;
