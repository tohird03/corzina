import React from 'react';
import "../ContactUs/Contact.css"
import vkImg from "../../Assets/Img/vk.png"
import telegramImg from "../../Assets/Img/Telegram.png"
import whaatsappImg from "../../Assets/Img/Whatsapp.png"
import instagramImg from "../../Assets/Img/Instagram.png"
import phone from "../../Assets/Img/phone.png"

const Contact = () => {
    return (
        <>
                <section className='contact'>
                    <div className="container">
                        <div className="contact__box">
                            <div>
                                <div className="contact__location">
                                    <h4 className='contact__location-title'>Наш офис</h4>

                                    <iframe className='contact__location-map'
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.626762389675!2d69.26962081519574!3d41.338728779268585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b5bc3472597%3A0xb7a352920b7c168a!2z0KLQvtGA0LPQvtCy0YvQtSDQoNGP0LTRiyAi0JzQsNC70LjQutCwIg!5e0!3m2!1sru!2s!4v1647167212785!5m2!1sru!2s"
                                        width="722"
                                        height="424"
                                        frameBorder="0"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        aria-hidden="false"
                                        tabIndex="0"
                                    />

                                </div>

                                <div className='contact__phone'>
                                    <img src={phone} alt="" />
                                    <p className='contact__phone-number'>
                                        +998906696603
                                    </p>
                                </div>
                            </div>

                            <ul className="contact__admin-link">
                                <li className='contact__link'>
                                    <a className='contact__link-target' href="https://www.whatsapp.com/?lang=ru" target="_blank">
                                        <img src={whaatsappImg} alt="vk img" />
                                    </a>
                                </li>
                                <li className='contact__link'>
                                    <a className='contact__link-target' href="https://vk.com/" target="_blank">
                                        <img src={vkImg} alt="vk img" />
                                    </a>
                                </li>
                                <li className='contact__link'>
                                    <a className='contact__link-target' href="https://www.instagram.com/tohirdoniyorov2003/" target="_blank">
                                        <img src={instagramImg} alt="vk img" />
                                    </a>
                                </li>
                                <li className='contact__link'>
                                    <a className='contact__link-target' href="https://telegram.me/savM_571_632" target="_blank">
                                        <img src={telegramImg} alt="telegram img" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
        </>
    );
}

export default Contact;
