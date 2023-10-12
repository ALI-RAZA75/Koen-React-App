import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { createRoot } from 'react-dom/client';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutPage from './views/about';
import './global.scss';
import HomePage from './views/home';

const app = (
  <div className=''>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='*' element={<div>Not Found</div>} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </div>
);

createRoot(document.getElementById('app')).render(app);
