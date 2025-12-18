import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import './index.css';
import HomePage from './landing-page/home/HomePage';
import  Signup from './landing-page/sign up/Signup';
import AboutPage from './landing-page/about/AboutPage';
import ProductPage from './landing-page/products/Product';
import SupportPage from './landing-page/support/SupportPage';
import Pricing from './landing-page/pricing/Pricing';
import Navbar from './landing-page/Navbar';
import Footer from './landing-page/Footer'; 
import NotFound from './landing-page/NotFound';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
  <Routes>
    
    <Route path='/' element={<HomePage/>}/>
     <Route path='/signup' element={<Signup/>}/>
      <Route path='/about' element={<AboutPage/>}/>
       <Route path='/product' element={<ProductPage/>}/>
       <Route path='/pricing' element={<Pricing/>}/>
       
        <Route path='/support' element={<SupportPage/>}/>
        <Route path='*' element={<NotFound/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
);

