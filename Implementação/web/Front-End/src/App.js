import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import { AppTopbar } from './AppTopbar';
import { AppFooter } from './AppFooter';
import { AppMenu } from './components/AppMenu/index';
import { AppProfile } from './AppProfile';
import { Toast } from 'primereact/toast';

//PAGINAS
// import Login from './pages/login'

// import { AppConfig } from './AppConfig';

import Router from './config/Router';
import { useSelector } from 'react-redux';


// import PrimeReact from 'primereact/utils';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'prismjs/themes/prism-coy.css';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
import './assets/css/layout.scss';
import './App.scss';

import api from './config/Axios.js'
import Loader from './components/Loader'
import logo from './assets/img/seplagmini.png';
import Menu from './config/menu'
import ProductOwner from './pages/ProductOwner/ProductOwner';

const App = () => {

  const user = useSelector((state) => state.userReducer.user)

  // Pode ser algum servidor executando localmente: 
  // http://localhost:3000

  window.$http = api

  window.$toast = useRef(null);

  return (
    <ProductOwner />
  );

}

export default App;
