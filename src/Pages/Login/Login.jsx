import React, { useContext } from 'react';
import { Context } from '../../Context/ProductContext';
import "../Login/Login.css"
import pencilPng from "../../Assets/Img/pencil.png"

const Login = () => {

    JSON.parse(window.localStorage.getItem('token1'))
    const { adminLogin, setAdminLogin } = useContext(Context)
    const { adminParol, setAdminParol } = useContext(Context)
    const { token, setToken } = useContext(Context)
    const handleSubmit = (e) => {

        e.preventDefault()

        if (adminLogin == 11112222 && adminParol == "aaaabbbb") {
            setToken("1111")
            
        } else {
            setToken(undefined)
            alert(" Login or Parol is not defained")
        }
        window.localStorage.setItem(JSON.stringify('token1'), token)
    }


    window.localStorage.setItem(JSON.stringify('token1'), token)

    return (
        <section>
            <div className="container">
                <form className='form' onSubmit={e => handleSubmit(e)}>
                    <input className='form__input' onChange={e => setAdminLogin(e.target.value)} type="text" placeholder='login' />
                    <input className='form__input' onChange={e => setAdminParol(e.target.value)} type="text" placeholder='parol' />

                    <button className='form__btn' type='submit'>Submit</button>

                </form>
            </div>
        </section>
    );
}

export default Login;
