import React, {useState} from 'react';
import './App.css';
import Header from "./components/Header";
import { Routes, Route, Outlet } from 'react-router'
import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./pages/Products";
import Checkout from "./pages/Checkout";
import {useSelector} from "react-redux";
import ProductForm from "./pages/ProductForm";


function App() {
    const [token] = useState(null);
    const loggedIn = useSelector(state => state.loggedIn)

  return (
    <div className="App">
        <header>
            <Header />
        </header>
        <main className='Container'>
            <Routes>
                {loggedIn ?
                <>
                    <Route index element={<Products />} />
                    <Route path="/create" element={<ProductForm />} />
                    <Route path="/checkout" element={<Checkout />} />
                </>
                :
                <>
                    <Route path='/login' element={<Login />}/>
                    <Route path='/register' element={<Register />}/>
                </>
            }
            </Routes>
        </main>
    </div>
  );
}

export default App;
