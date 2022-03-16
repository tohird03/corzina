import { createContext, useState, useEffect } from "react";

const Context = createContext()

function Provider({children}){

    const localProduct = JSON.parse(window.localStorage.getItem('product'))

    const localCorzina = JSON.parse(window.localStorage.getItem('corzina'))
    const localUserPrice = JSON.parse(window.localStorage.getItem('price'))
    const localUserProduct= JSON.parse(window.localStorage.getItem('products'))

    let [savedArr, setSavedArr] = useState(localProduct || [])
    let [saveCorzinka, setSaveCorzinka] = useState(localCorzina || [])
    let [products, setProducts] = useState(localUserProduct || [])

    let [userCity, setUserCity] = useState()
    let [userRegion, setUserRegion] = useState()
    let [userStreet, setUserStreet] = useState()
    let [userHouse, setUserHouse] = useState()
    let [userNomeHouse, setUserNomeHouse] = useState()

    let [adminLogin, setAdminLogin] = useState("")
    let [adminParol, setAdminParol] = useState("")

    let [corzinLenth, setCorzinLength] = useState(0)

    const localUserToken = JSON.parse(window.localStorage.getItem('token'))

    let [token, setToken] = useState(localUserToken || "")

    window.localStorage.setItem(JSON.stringify('token'), token)
    useEffect(() =>{
        window.localStorage.setItem(JSON.stringify('token'), token)
    }, [setToken])

    let [userInfo, setUserInfo] = useState(localUserPrice || [])

    window.localStorage.setItem('corzina', JSON.stringify(saveCorzinka))

    useEffect(() => {
        window.localStorage.setItem('product', JSON.stringify(savedArr))
    }, [savedArr])

    window.localStorage.setItem('price', JSON.stringify(userInfo))

    useEffect(() => {
        window.localStorage.setItem('products', JSON.stringify(products))
    }, [])
    useEffect(() => {
        fetch("https://shoppings-corzina.herokuapp.com/posts")
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [setProducts])

    return(
        <Context.Provider value={{products, setProducts, savedArr, setSavedArr, saveCorzinka, setSaveCorzinka, userCity, setUserCity, userNomeHouse, setUserNomeHouse, userHouse, setUserHouse,  userStreet, setUserStreet, userRegion, setUserRegion, userInfo, setUserInfo, adminLogin, setAdminLogin, adminParol, setAdminParol, token, setToken, corzinLenth, setCorzinLength}}>
            {children}
        </Context.Provider>
    )
}


export { Context, Provider }