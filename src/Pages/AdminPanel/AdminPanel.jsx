import React, { useContext } from 'react';
import { Context } from '../../Context/ProductContext';
import "../AdminPanel/AdminPanel.css"
const Adminpanel = () => {

    const { userInfo } = useContext(Context)
    const { saveCorzinka, setSaveCorzinka } = useContext(Context)

    let moneyCounter = []
    saveCorzinka?.map(item => {
        let moneys = (item.money * item.amount)
        moneyCounter.push(Number(moneys))
    })


    let counters

    if (saveCorzinka.length > 0) {
        counters = moneyCounter.reduce(function (a, b) {
            return a + b
        })
    }

    return (
        <div>
            <div className="container">

                {
                    saveCorzinka.length <= 0 ? <h1 className='heading'>Не куплено</h1> : <div className="accordion accordion-flush" id="accordionFlushExample">
                        {
                            userInfo?.map(element => {
                                return <div key={Math.random()} className="accordion-item mb-3">
                                    <h2 className="accordion-header" id={element.id}>
                                        <button className="accordion-button collapsed bg-success border border-2 border-dark text-light" type="button" data-bs-toggle="collapse" data-bs-target={`#${element.city + element.house + element.region + element.street + element.numberHouse}`} aria-expanded="false" aria-controls={element.id}>
                                            Опрос пользователей {element.id}
                                        </button>
                                    </h2>
                                    <div id={element.city + element.house + element.region + element.street + element.numberHouse} className="accordion-collapse collapse bg-warning" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">

                                        <div className="accordion-body">
                                            <p className='m-0 '>Опрос пользователей {element.id}</p>

                                            <h4>Местоположение пользователя</h4>
                                            <table className="table table-bordered border-5 border-dark">
                                                <thead>
                                                    <tr className='bg-dark'>
                                                        <th className='admin__table-body' scope="col">№</th>
                                                        <th className='admin__table-body' scope="col">Город</th>
                                                        <th className='admin__table-body' scope="col">Область</th>
                                                        <th className='admin__table-body' scope="col">Улица</th>
                                                        <th className='admin__table-body' scope="col">Дом</th>
                                                    </tr>

                                                    <tr key={Math.random()}>
                                                        <th className='admin__table-user' scope="col">{element.id}</th>
                                                        <th className='admin__table-user' scope="col">{element.city}</th>
                                                        <th className='admin__table-user' scope="col">{element.region}</th>
                                                        <th className='admin__table-user' scope="col">{element.street}</th>
                                                        <th className='admin__table-user' scope="col">{element.house}</th>
                                                    </tr>
                                                </thead>
                                            </table>

                                            <h4>Продукт магазина пользователя</h4>
                                            <table className="table table-bordered border-5 border-dark">
                                                <thead>
                                                    <tr className='bg-dark'>
                                                        <th className='admin__table-body' scope="col">Название продукта</th>
                                                        <th className='admin__table-body' scope="col">Категория</th>
                                                        <th className='admin__table-body' scope="col">Количество</th>
                                                        <th className='admin__table-body' scope="col">Расходы</th>
                                                        <th className='admin__table-body' scope="col">Итоговая цена</th>
                                                    </tr>

                                                    {
                                                        element.productName?.saveCorzinka?.map(element => {
                                                            return <tr key={Math.random()}>
                                                                <th className='admin__table-user' scope="col">{element.title}</th>
                                                                <th className='admin__table-user' scope="col">{element.category}</th>
                                                                <th className='admin__table-user' scope="col">{element.amount}</th>
                                                                <th className='admin__table-user' scope="col">{element.money}</th>
                                                                <th className='admin__table-user' scope="col">{element.amount * element.money}</th>
                                                            </tr>
                                                        })
                                                    }

                                                    <tr>
                                                        <th className='admin__table-user' scope="col">{element.title}</th>
                                                        <th className='admin__table-user' scope="col">{element.category}</th>
                                                        <th className='admin__table-user' scope="col">{element.amount}</th>
                                                        <th className='admin__table-user' scope="col">{element.money}</th>
                                                        <th className='admin__table-user' scope="col">
                                                            Общая цена: {counters}
                                                        </th>
                                                    </tr>

                                                </thead>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                }
            </div>
        </div>
    );
}

export default Adminpanel;
