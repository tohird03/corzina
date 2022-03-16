import './App.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
// import Emptybasket from './Pages/EmptyBasket/EmptyBasket';
import Home from './Pages/Home/Home';
import About from './Pages/About-server/About';
import Contact from "./Pages/ContactUs/Contact"
import Aboutproduct from './Pages/AboutProduct/AboutProduct';
import Saved from './Pages/Saved/Saved';
import Corzina from './Pages/Corzina/Corzina';
import Checkout from './Pages/Checkout/Checkout';
import Checkoutfinish from './Pages/CheckoutFinish/CheckoutFinish';
import Adminpanel from './Pages/AdminPanel/AdminPanel';
import Private from './Routes/Private';
import Public from './Routes/Public';
import Login from './Pages/Login/Login';


function App() {
  return (
    <div className="App">
      <Header/>
        <main>
          <Routes>
            <Route path='/' element={<Public/>}>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/save' element={<Saved/>}/>
                <Route path='/corzina' element={<Corzina/>}/>
                <Route path='/checkout' element={<Checkout/>}/>
                <Route path='/checkoutFinesh' element={<Checkoutfinish/>}/>
                <Route path='/posts/:productId' element={<Aboutproduct/>}/>
                <Route path='/login' element={<Login/>}/>
            </Route>

            <Route path='/' element={<Private/>}>
                <Route path='/admin' element={<Adminpanel/>}/>
            </Route>
          </Routes>
        </main>

      <Footer/>
    </div>
  );
}

export default App;
