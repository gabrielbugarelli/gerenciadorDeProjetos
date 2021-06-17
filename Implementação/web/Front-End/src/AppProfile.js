import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import profile from './assets/img/default-avatar.jpg';
import { useSelector,useDispatch } from 'react-redux';
import { logout } from "./config/auth.js";
import ModalSeplag from './components/ModalSeplag'
import RotuloSeplag from './components/RotuloSeplag'
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';

export const AppProfile = () => {
    
    const [expanded, setExpanded] = useState(false);
    const [userName,setUserName] = useState('')
    const userReducer = useSelector(state => state.userReducer)
    const dispatch = useDispatch();
    const [exibirTelaSenha, setExibirTelaSenha] = useState(false);
    const [confirmarSenha,setConfirmarSenha]  = useState('')
    const [senhaNova,setsenhaNova]  = useState('')
    const [senhaAtual,setSenhaAtual]  = useState('')


    useEffect(()=>{
        setUserName(userReducer.user.contaAcesso.nomeApresentacao)
    })
    
    function fecharTelaSenha() {
        setExibirTelaSenha(false)
    }

    function resetarSenha(){
        setExibirTelaSenha(true)
    }
    
    function alterarRegistro(){

        let formData = {
            login:userReducer.user.contaAcesso.login,
            senhaAtual,
            senhaNova,
            confirmarSenha,
        }

        window.$http.put(`/seguranca/contasacesso/senha/${userReducer.user.contaAcesso.id}`, JSON.stringify(formData))
        .then(res => {
            window.$toast.current.show({severity:'success', summary: res.data, life: 3000})
            setExibirTelaSenha(false)
        })
    }

    const logoutUser = () => {

        logout()
        
        dispatch({type:'SETTOKEN',value: null})
 
        dispatch({type:'SETUSER',value: null})
    }

    const onClick = (event) => {
        setExpanded(prevState => !prevState);
        event.preventDefault();
    }

    const avatar = {        
		borderRadius: "50%",
		width: "50px"
    }
    const perfilBotao = {
        textAlign: "center",
        minWidth: "95%"
    }

    return (
        <div className="layout-profile">
            <div>
                <img style={avatar} src={profile} alt="Profile" />
            </div>
            <button className="p-link layout-profile-link" style={perfilBotao} onClick={onClick}>
                <span className="username">{userName}</span>
                <i className="pi pi-fw pi-cog" />
            </button>
            <CSSTransition classNames="p-toggleable-content" timeout={{ enter: 1000, exit: 450 }} in={expanded} unmountOnExit>
                <ul className={classNames({ 'layout-profile-expanded': expanded })}>
                    <li><button type="button" className="p-link"><i className="pi pi-fw pi-user" /><span>Perfil</span></button></li>
                    <li onClick={() => resetarSenha()}> <button type="button" className="p-link"><i className="pi pi-fw pi-key" /><span>Alterar Senha</span> </button></li>
                    <li  onClick={() => logoutUser()}><button type="button" className="p-link"><i className="pi pi-fw pi-power-off" /><span>Sair</span></button></li>
                </ul>
            </CSSTransition>
            <ModalSeplag titulo="Trocar a Senha"   tamanho="23rem" type={''} labelFechar='Fechar' labelAcao="Alterar" visible={exibirTelaSenha} fechar={fecharTelaSenha} funcAcao={alterarRegistro} >
                <div className="p-col-12">
                    <RotuloSeplag nome="Senha Atual" >
                        <Password  value ={senhaAtual} onChange={(e) => setSenhaAtual(e.target.value)}  feedback={false}/>
                    </RotuloSeplag>
                    <RotuloSeplag nome="Nova Senha"  >
                        <Password value ={senhaNova} onChange={(e) => setsenhaNova(e.target.value)} weakLabel="Fraco" mediumLabel="Médio" strongLabel="Forte" promptLabel="Entra com a Nova Senha"/>
                    </RotuloSeplag>
                    <RotuloSeplag nome="Confirma Nova Senha"  >
                        <Password feedback={false} onChange={(e) => setConfirmarSenha(e.target.value)} value={confirmarSenha}/>
                    </RotuloSeplag>
                </div>
            </ModalSeplag>
        </div>
    );

}
