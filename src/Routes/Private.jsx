import { Navigate, Outlet } from "react-router-dom"
import React, { useContext } from 'react';
import { Context } from '../Context/ProductContext';
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home";
import Adminpanel from "../Pages/AdminPanel/AdminPanel";

const Private = () => {
    const { token, setToken } = useContext(Context)
    if(token){
        return <Adminpanel/>
    }else{
        return <Login/>
    }
}

export default Private;
