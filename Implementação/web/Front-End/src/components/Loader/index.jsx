import React from 'react'
import {useAxiosLoader } from '../../config/Axios';
import './style.css'
import logo from '../../assets/img/Logo_Branco_Estado_MT.png';

export default (props) =>{
  const [isLoading] = useAxiosLoader();
  function loader(){
    return(
      <div className="loader-overlay">
        <img className="text" src={logo} style={{width: "13%"}}/>
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <span className="msg">
          {props.text ? props.text : "Carregando"}
        </span>
    </div>
    )
  }
  return(
    <>
      {
        isLoading ? loader() : false
      }
    </>
  )
}