import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import {useState } from 'react'
import './style.css'

const ModalSeplag = (props)  => {   
    const [exibirTelaSenha, setExibirTelaSenha] = useState(false);
 
    const footer = () => {
        if(props.type === 'CONFIRMACAO'){            
            return (
                <div>
                    <Button label="Não" icon="pi pi-times" onClick={() => props.fechar()}  className="p-button-raised p-button-danger" />
                    <Button label="Sim" icon="pi pi-check" onClick={() => props.funcAcao()} autoFocus className="p-button-raised" />
                </div>
            );
        }else if(props.type === 'SIMPLES'){             
            return (        
                <div>
                    <Button label={props.labelFechar? props.labelFechar: 'fechar'} icon={props.iconFechar? props.iconFechar: 'pi pi-times'} onClick={() => props.fechar()}  className="p-button-raised p-button-danger" />
                </div>       
            ); 
        }else{                
            return (               
                <div>
                    <Button label={props.labelFechar? props.labelFechar: 'fechar'} icon={props.iconFechar? props.iconFechar: 'pi pi-times'} onClick={() => props.fechar()}  className="p-button-raised p-button-danger margin-app-entre-button " />
                    <Button label={props.labelAcao? props.labelAcao: 'Enviar'} icon={props.iconAcao? props.iconAcao: 'pi pi-check'} onClick={() => props.funcAcao()} autoFocus className="p-button-raised margin-app-entre-button" />
                </div>    
            ); 
        }
    };
    
    return (
        <Dialog header={props.titulo} footer={footer()} visible={props.visible} style={{width: props.tamanho? props.tamanho: '70px',height: props.altura? props.altura : 'auto'}} modal onHide={() => props.fechar()}>
            <div className='margin-superior-simples quebrar-texto'>
                <div className="p-grid p-fluid">
                    {props.children}
                </div>
            </div>
        </Dialog>
    )
}

export default ModalSeplag;