import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';

import { AppTopbar } from './AppTopbar';
import { AppFooter } from './AppFooter';
import { AppMenu } from './AppMenu';
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

const App = () => {

    const user = useSelector((state) => state.userReducer.user)

    // Pode ser algum servidor executando localmente: 
    // http://localhost:3000

    window.$http = api

    window.$toast = useRef(null);

    const [layoutMode, setLayoutMode] = useState('static');
    const [layoutColorMode, setLayoutColorMode] = useState('dark')
    const [staticMenuInactive, setStaticMenuInactive] = useState(false);
    const [overlayMenuActive, setOverlayMenuActive] = useState(false);
    const [mobileMenuActive, setMobileMenuActive] = useState(false);
    const [exibirModalTrocaSenha, setExibirModalTrocaSenha] = useState(false);
    const [inputStyle] = useState('outlined');
    const [ripple] = useState(false);
    const sidebar = useRef();
    let menuClick = false;

    useEffect(() => {
        console.log(user)
        if (user) {
            if (user.contaAcesso.trocarSenha === 'S') {
                console.log('precisa trocar')
            } else {
                console.log('Não Precisa trocar')
            }
        }
    }, [user])

    useEffect(() => {
        if (mobileMenuActive) {
            addClass(document.body, 'body-overflow-hidden');
        }
        else {
            removeClass(document.body, 'body-overflow-hidden');
        }
    }, [mobileMenuActive]);

    const onWrapperClick = (event) => {
        if (!menuClick) {
            setOverlayMenuActive(false);
            setMobileMenuActive(false);
        }
        menuClick = false;
    }

    const onToggleMenu = (event) => {
        menuClick = true;

        if (isDesktop()) {
            if (layoutMode === 'overlay') {
                setOverlayMenuActive(prevState => !prevState);
            }
            else if (layoutMode === 'static') {
                setStaticMenuInactive(prevState => !prevState);
            }
        }
        else {
            setMobileMenuActive(prevState => !prevState);
        }
        event.preventDefault();
    }

    const onSidebarClick = () => {
        menuClick = true;
    }

    const onMenuItemClick = (event) => {
        if (!event.item.items) {
            setOverlayMenuActive(false);
            setMobileMenuActive(false);
        }
    }

    const menu = Menu();

    const addClass = (element, className) => {
        if (element.classList)
            element.classList.add(className);
        else
            element.className += ' ' + className;
    }

    const removeClass = (element, className) => {
        if (element.classList)
            element.classList.remove(className);
        else
            element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }

    const isDesktop = () => {
        return window.innerWidth > 1024;
    }

    const isSidebarVisible = () => {
        if (isDesktop()) {
            if (layoutMode === 'static')
                return !staticMenuInactive;
            else if (layoutMode === 'overlay')
                return overlayMenuActive;
            else
                return true;
        }

        return true;
    }

    const verificaUserLogado = () => {
        if (user) {
            return (
                <>
                    <AppTopbar onToggleMenu={onToggleMenu} />
                    <CSSTransition className="layout-sidebar layout-sidebar-light" timeout={{ enter: 200, exit: 200 }} in={isSidebarVisible()} unmountOnExit>
                        <div ref={sidebar} className={sidebarClassName} onClick={onSidebarClick}>
                            <div className="layout-logo">
                                <img alt="Logo" src={logo} />
                            </div>
                            <AppProfile />
                            <AppMenu model={menu} onMenuItemClick={onMenuItemClick} />
                        </div>
                    </CSSTransition>
                    <div className="layout-main">
                        <Router />
                    </div>
                    <AppFooter />
                </>
            )
        } else {
            // return (<Login />);
        }
    }

    const wrapperClass = classNames('layout-wrapper', {
        'layout-overlay': layoutMode === 'overlay',
        'layout-static': layoutMode === 'static',
        'layout-static-sidebar-inactive': staticMenuInactive && layoutMode === 'static',
        'layout-overlay-sidebar-active': overlayMenuActive && layoutMode === 'overlay',
        'layout-mobile-sidebar-active': mobileMenuActive,
        'p-input-filled': inputStyle === 'filled',
        'p-ripple-disabled': ripple === false
    });

    const sidebarClassName = classNames('layout-sidebar', {
        'layout-sidebar-dark': layoutColorMode === 'dark',
        'layout-sidebar-light': layoutColorMode === 'light'
    });


    return (
        <div className={wrapperClass} onClick={onWrapperClick}>
            <Toast ref={window.$toast}></Toast>
            <Loader />
            <h1>Teste</h1>
            {verificaUserLogado()}
        </div>
    );

}

export default App;
