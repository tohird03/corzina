import React, { useContext, useState } from 'react';
import { Context } from '../../Context/ProductContext';
import "../Checkout/Checkout.css"
import checkoutImg from "../../Assets/Img/checkout.png"
import pencilPng from "../../Assets/Img/pencil.png"
import { Link } from 'react-router-dom';

const Checkout = () => {
    const { saveCorzinka, setSaveCorzinka } = useContext(Context)

    const { userCity, setUserCity } = useContext(Context)
    const { userRegion, setUserRegion } = useContext(Context)
    const { userStreet, setUserStreet } = useContext(Context)
    const { userHouse, setUserHouse } = useContext(Context)
    const { userNomeHouse, setUserNomeHouse } = useContext(Context)
    const { userInfo, setUserInfo } = useContext(Context)
    const [userPhone, setUserPhone] = useState("")
    const [userPayment, setUserPayment] = useState("")

    let moneyCounter = []
    saveCorzinka?.map(item => {
        let moneys = (item.money * item.amount)
        moneyCounter.push(Number(moneys))
    })

    let counters
    if (moneyCounter.length > 0) {
        counters = moneyCounter.reduce(function (a, b) {
            return a + b
        })
    }
    console.log(moneyCounter);

    const handleSubmit = (e) => {
        e.preventDefault()

        const userInfoAbout = {
            id: userInfo[userInfo.length - 1]?.id + 1 || 1,
            city: userCity,
            region: userRegion,
            street: userStreet,
            house: userHouse,
            numberHouse: userNomeHouse,
            productName: { saveCorzinka },
            paymentMethod: userPayment,
            userPhone: userPhone,
        }


        if (!userInfo.includes(userInfoAbout)) {
            userInfo.push(userInfoAbout)
        }
        // setUserInfo(state => [...state, userInfoAbout])
        window.localStorage.setItem('price', JSON.stringify(userInfo))

        setUserCity("")
        setUserRegion("")
        setUserStreet("")
        setUserHouse("")
        setUserNomeHouse("")
        setUserPhone("")
        setUserPayment("")
    }

    let disabledBtnAdd;
    if ((userRegion?.length === undefined || userRegion?.length === 0) &&
        (userStreet?.length === undefined || userStreet?.length == 0) &&
        (userHouse?.length === undefined || userHouse?.length == 0) &&
        (userPayment?.length === undefined || userPayment?.length == 0) &&
        (userPhone?.length === undefined || userPhone?.length == 0) &&
        (userNomeHouse?.length === undefined || userNomeHouse?.length === 0)) {
        disabledBtnAdd = "disabled color"
    } else if ((userRegion?.length >= 1) &&
        (userStreet?.length >= 1) &&
        (userHouse?.length >= 1) &&
        (userPhone?.length >= 1) &&
        (userPayment?.length >= 1) &&
        (userNomeHouse?.length >= 1)) {
        disabledBtnAdd = "notDisabled"
    }

    if (disabledBtnAdd == undefined) {
        disabledBtnAdd = "disabled color"
    }

    return (

        < section >
            <div className="container">
                <form className='checkout__form'>
                    <div className='checkout__user-location'>
                        <h2 className='checkout__heading'>Оформление заказа</h2>
                        <div className='checkout__location'>
                            <div className='checkout__location-money'>
                                <h3 className='checkout__location-heading'>Доставка курьером</h3>
                                <p className='checkout__location-desc'> 499 ₸</p>
                            </div>

                            <iframe className='checkout__location-map'
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.626762389675!2d69.26962081519574!3d41.338728779268585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b5bc3472597%3A0xb7a352920b7c168a!2z0KLQvtGA0LPQvtCy0YvQtSDQoNGP0LTRiyAi0JzQsNC70LjQutCwIg!5e0!3m2!1sru!2s!4v1647167212785!5m2!1sru!2s" height="146"
                                frameBorder="0"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                aria-hidden="false"
                                tabIndex="0"
                            />

                            <div className='checkout__map-imgIcon'>
                                <img src={checkoutImg} alt="" />
                                <h4 className='checkout__map-imgIcon-heading'>Адрес доставки</h4>
                            </div>
                            <select required="required" onChange={e => setUserCity(e.target.value)} defaultValue="sergili" className='checkout__location-city checkout__location-form'>
                                <option value="" selected disabled>Город</option>
                                <option value="sergili">Sergili</option>
                                <option value="bektemir">Bektemir</option>
                                <option value="chilonzor">Chilonzor</option>
                                <option value="mirobod">Mirobod</option>
                                <option value="mirzo-ulugbek">Mirzo Ulug'bek</option>
                                <option value="olmazor">Olmazor</option>
                                <option value="shayxontohur">Shayxontohur</option>
                                <option value="toshkent">Toshkent</option>
                                <option value="uchtepa">Uchtepa</option>
                                <option value="yakkasaroy">Yakkasaroy</option>
                                <option value="yangihayot">Yangihayot</option>
                                <option value="yashnobod">Yashnobod</option>
                                <option value="yunusobod">Yunusobod</option>
                            </select>

                            <label className='checkout__form-label'>
                                <input required="required" onChange={e => setUserRegion(e.target.value)} className='checkout__location-form' type="text" placeholder='Улица / Район' />
                                <img className='checkout__pencil-img' src={pencilPng} alt="" />
                            </label>
                            <div className='checkout__input-location'>
                                <label onChange={e => setUserStreet(e.target.value)} className='checkout__form-label checkout__input-label'>
                                    <input required="required" className='checkout__location-form' type="text" placeholder='Дом' />
                                    <img className='checkout__pencil-img' src={pencilPng} alt="" />
                                </label>
                                <label className='checkout__form-label checkout__input-label'>
                                    <input required="required" onChange={e => setUserHouse(e.target.value)} className='checkout__location-form' type="text" placeholder='Подъезд' />
                                    <img className='checkout__pencil-img' src={pencilPng} alt="" />
                                </label>
                                <label className='checkout__form-label checkout__input-label'>
                                    <input required="required" onChange={e => setUserNomeHouse(e.target.value)} className='checkout__location-form' type="text" placeholder='Квартира' />
                                    <img className='checkout__pencil-img' src={pencilPng} alt="" />
                                </label>
                            </div>
                        </div>
                    </div>

                    <Link to="/admin">admin</Link>

                    <div className="checkout__total">
                        <div className='checkout__total-ptoduct checkout__cards'>
                            <h4 className='checkout__your-order'>Ваш заказ</h4>

                            {
                                saveCorzinka?.map(item => {
                                    console.log(item);
                                    return (
                                        <div key={Math.random()} className='checkout__product-name'>
                                            <span className='checkout__product-type-counter'>{item.amount}x</span>
                                            <h5 className='checkout__product-type-name'>{item.title}</h5>
                                            <p className='checkout__product-type-money'>{item.money * item.amount} cyм</p>
                                        </div>
                                    )
                                })
                            }

                            <div className='checkout__product-name'>
                                <span className='checkout__product-type-counter'></span>
                                <h5 className='checkout__product-type-name'>Доставка</h5>
                                <p className='checkout__product-type-money'>0 sum</p>
                            </div>
                            <div className='checkout__product-name'>
                                <span className='checkout__product-type-counter'></span>
                                <h5 className='checkout__product-type-name'>К оплате</h5>
                                <p className='checkout__product-type-money'>{counters} sum</p>
                            </div>
                        </div>
                        <div className='checkout__payment-method checkout__cards'>
                            <h4 className='checkout__your-order'>Способ оплаты</h4>

                            <div onChange={e => setUserPayment(e.target.value)} className='checkout__product-payment'>
                                <label className='checkout__paymet'>
                                    <input value="remote__payment" type="radio" name='payment' />
                                    Удаленная оплата
                                </label>
                                <label className='checkout__paymet'>
                                    <input value="cash" type="radio" name='payment' />
                                    Денежные средства
                                </label>
                            </div>
                        </div>
                        <div className='checkout__recipient-number checkout__cards'>
                            <h4 className='checkout__your-order'>Номер получателя</h4>

                            <label className='checkout__form-label'>
                                <input onChange={e => setUserPhone(e.target.value)} className='checkout__location-form' type="text" placeholder='+998 9_ ___ __ __' />
                                <img className='checkout__pencil-img' src={pencilPng} alt="" />
                            </label>
                        </div>

                        <div className={disabledBtnAdd}>
                            <button className='checkout__product-type-submit' onClick={e => handleSubmit(e)}>
                                <Link disabled={true} id={Math.random()} to="/checkoutFinesh" className='checkout__finish'>Закончить оформление!</Link>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </section >
    );
}

export default Checkout;
