import React from 'react'
import { NavLink } from "react-router-dom"
import "../Footer/Footer.css"
import siteLogo from "../../Assets/Img/logo.png"
import vkImg from "../../Assets/Img/vk.png"
import telegramImg from "../../Assets/Img/Telegram.png"
import whaatsappImg from "../../Assets/Img/Whatsapp.png"
import instagramImg from "../../Assets/Img/Instagram.png"
const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className='footer__card'>
                    <NavLink className="footer__logo" to="/">
                        <img src={siteLogo} alt="footer logo" width="105" height="50" />
                    </NavLink>

                    <ul className='footer__nav-list'>
                        <li className='footer__nav-lists'>
                            <NavLink className="footer__nav-item" to="/save">
                                Избранное
                            </NavLink>
                        </li>
                        <li className='footer__nav-lists'>
                            <NavLink className="footer__nav-item" to="/corzina">
                                Корзина
                            </NavLink>
                        </li>
                        <li className='footer__nav-lists'>
                            <NavLink className="footer__nav-item" to="/contact">
                                Контакты
                            </NavLink>
                        </li>
                    </ul>

                    <ul className='footer__language-list'>
                        <li className='footer__nav-lists'>
                            <NavLink className="footer__nav-item" to="/about">
                                Условия сервиса
                            </NavLink>
                        </li>
                        <li className='footer__nav-lists'>
                            <select>
                                <option value="uz">Uz</option>
                                <option value="ru">Ru</option>
                                <option value="eng">Eng</option>
                            </select>
                        </li>
                    </ul>

                    <ul className='footer__links'>
                        <li className='footer__link'>
                            <a href="https://vk.com/">
                                <img src={vkImg} alt="vk img" />
                            </a>
                        </li>
                        <li className='footer__link'>
                            <a href="https://www.instagram.com/tohirdoniyorov2003/">
                                <img src={instagramImg} alt="vk img" />
                            </a>
                        </li>
                        <li className='footer__link'>
                            <a href="https://telegram.me/savM_571_632">
                                <img src={telegramImg} alt="telegram img" />
                            </a>
                        </li>
                        <li className='footer__link'>
                            <a href="https://www.whatsapp.com/?lang=ru">
                                <img src={whaatsappImg} alt="vk img" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
