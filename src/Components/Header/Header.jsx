import React, { useContext } from 'react';
import { Context } from '../../Context/ProductContext';
import { NavLink } from "react-router-dom"
import "../Header/Header.css"
import siteLogo from '../../Assets/Img/logo.png';
import siteVektor from "../../Assets/Img/Vector.png"
import siteZakaz from "../../Assets/Img/zakazIcon.png"
const Header = () => {

    const {savedArr} = useContext(Context)
    const {saveCorzinka, setSaveCorzinka} = useContext(Context)


    return (
        <header className='header'>
            <div className="container header__container">
                <NavLink className="header__logo" to="/">
                    <img src={siteLogo} alt="site logo" width="105" height="50" />
                </NavLink>

                <nav>
                    <ul className='header__nav-list'>
                        <li className='header__nav-lists'>
                            <NavLink className="header__nav-item" to="/save">
                                <img src={siteVektor} alt="" width="30" height="25"/>
                                <span className='header__nav-badge'>{savedArr.length}</span>
                            </NavLink>
                        </li>
                        <li className='header__nav-lists'>
                            <NavLink className="header__nav-item" to="/corzina">
                                <img src={siteZakaz} alt="" width="30" height="25"/>
                                <span className='header__nav-badge'>{saveCorzinka.length}</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
