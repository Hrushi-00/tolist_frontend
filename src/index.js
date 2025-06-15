import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Navbar from './app/Navbar.jsx';
import AboutUs from './app/AboutUs.jsx';
import Features from './app/Features.jsx';
import MoreOption from './app/MoreOption.jsx';
import Contact from './app/Contact.jsx';
import Footer from './app/Footer.jsx';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <AboutUs />
    <Features />
    <MoreOption />
    <Contact />
    <Footer />
  </React.StrictMode>
);


reportWebVitals();
