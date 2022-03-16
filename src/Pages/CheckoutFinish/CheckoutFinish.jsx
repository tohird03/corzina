import React from 'react';
import "../CheckoutFinish/CheckoutFinish.css"
const Checkoutfinish = () => {

    return (
        <section>
            <div className="container">
                <div className='checkout__finesh'>
                    <h2 className='checkout__finesh-heading'>Номер вашего заказа №{Math.floor(Math.random() * 1000000)}, с Вами свяжется наш менеджер.</h2>
                </div>
            </div>
        </section>
    );
}

export default Checkoutfinish;
