import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import LoginComponent from './components/login/LoginComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <LoginComponent />
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
