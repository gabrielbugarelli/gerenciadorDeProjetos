import {useState,useCallback,useEffect, useMemo} from 'react';
import axios from "axios";
import  {GetToken,isExpiredToken,setToken,logout}  from "./auth.js";
import {exibirErroTratado} from "../utilities/global.js";
import { useDispatch } from 'react-redux';
// Pode ser algum servidor executando localmente: 
// http://localhost:3000



const Axios = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const useAxiosLoader = () =>{
  const [counter,setCounter] = useState(0);
  const dispatch = useDispatch();
  const inc = useCallback(()=> setCounter(counter => counter + 1),[setCounter])
  const dec = useCallback(()=> setCounter(counter => counter - 1),[setCounter])

  const interceptors = useMemo( ()=> ({
    request:  config => {
      
      const tokenStr = GetToken()
      
      if (tokenStr!= null) { 
        let token = JSON.parse(tokenStr)
        let dataToken = token.token
        
        if(config.data && typeof config.data === 'object' && config.data.get('grant_type') == 'refresh_token'){  
          return (inc(),config);
        } 

        config.headers.Authorization = `${dataToken.token_type}  ${dataToken.access_token}`
        config.headers['Content-Type'] = 'application/json';
  
      }  
      config.headers['Content-Type'] = 'application/json';
      return (inc(),config);

    },

    errorRequest: error =>(dec(),Promise.reject(error)),
    
    response: response =>(dec(),response),

    errorResponse: error =>{
      
     const originalRequest = error.config;
          
     if(!error.response){
      return (dec(),Promise.reject(error));
     }
     console.log(originalRequest)
     if (error.response.status === 401 && originalRequest.url === `/oauth/token` && originalRequest.data=='grant_type=refresh_token') {     
        
        window.$toast.current.show({severity:'error', summary: "Sua sessão expirou! Por favor Logue novamente", life: 3000})
        logout()
        dispatch({type:'SETUSER',value: null})
        return (dec(),Promise.reject(error));
      }
      
      if(error.response.status === 401 && isExpiredToken() && !originalRequest._retry){
        originalRequest._retry = true;
        let formData = new URLSearchParams();
        formData.append('grant_type', 'refresh_token');
            
        delete window.$http.defaults.headers.common['Content-Type']
        window.$http.defaults.headers.common['Authorization']  = `Basic ${btoa(process.env.REACT_APP_USERNAME_API+":"+process.env.REACT_APP_PASSWORD_API)}`;

        return (dec(),
                window.$http.post(`/oauth/token`,formData,{
                    withCredentials: true,
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8' }
                }).then(res =>{           
                   
                    if(res.status===200){
                        let userlogado = JSON.parse(GetToken());
                        userlogado.token =res.data

                        logout()
                        setToken(JSON.stringify(userlogado))
                        
                        originalRequest.headers.Authorization = `${userlogado.token.token_type}  ${userlogado.token.access_token}`
                        originalRequest.headers['Content-Type'] = 'application/json';
                      
                        return  window.$http(originalRequest);
                       
                    }
                })
                .catch(()=> Promise.reject(error))
              )
      }
  
      if (error.response) {
          exibirErroTratado(error,  'error', null)
      } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          
          exibirErroTratado(error,  'error', null)
      } else {
          // Something happened in setting up the request that triggered an Error
      
          
      }

      // Retorna a promisse rejeitada
      return dec(),Promise.reject(error)
    }
  }),[inc,dec]);

  useEffect(() =>{
    const reqIntercepetor = Axios.interceptors.request.use(interceptors.request,interceptors.errorRequest)
    const resIntercepetor = Axios.interceptors.response.use(interceptors.response,interceptors.errorResponse)

    return()=>{
      Axios.interceptors.request.eject(reqIntercepetor);
      Axios.interceptors.response.eject(resIntercepetor);
    }
    
  },[interceptors])

  return [counter > 0]
}

// VERSÃO ANTIGA SEM O LOADER
// Axios.interceptors.request.use(
  
//   config =>{
//     console.log(config)
//     useDispatch({type:'SETLOAD',value:true})
//     const tokenStr = GetToken()
    
//     // const tokenStr = {token:''}
//     if (tokenStr!= null) { 
//       let token = JSON.parse(tokenStr)
//       let dataToken = token.token
      
//       config.headers.Authorization = `${dataToken.token_type}  ${dataToken.access_token}`
//       config.headers['Content-Type'] = 'application/json';

//     }

//     return config;
//   },

//   error=>{
//     if (error.response) {
//         // The request was made and the server responded with a status code
//         // that falls out of the range of 2xx
//         //console.log(error.response.data);
//         //console.log(error.response.status);
//         //console.log(error.response.headers);
//     } else if (error.request) {
//         // The request was made but no response was received
//         // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
//         // http.ClientRequest in node.js
//         //console.log(error.request);
//     } else {
//         // Something happened in setting up the request that triggered an Error
//         //console.log('Erro: ', error.message);
//     }
//     // Retorna a promisse rejeitada
//     return Promise.reject(error)
//   } 

// )

// Axios.interceptors.response.use(
//     response => {
//       //Função setLoader para fechar o carregamento
//       useDispatch({type:'SETLOAD',value:false})
//       return response
//     },
//      error=>{
//       useDispatch({type:'SETLOAD',value:true})
//       if (error.response) {
//           exibirErroTratado(error,  'error', null)
//       } else if (error.request) {
//           // The request was made but no response was received
//           // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
//           // http.ClientRequest in node.js
          
//           exibirErroTratado(error,  'error', null)
//       } else {
//           // Something happened in setting up the request that triggered an Error
          
//       }
//       // Retorna a promisse rejeitada
//       return Promise.reject(error)

//       // const originalRequest = error.config;
//       // if (error.response.status === 401 && !originalRequest._retry) {

//       //   originalRequest._retry = true;
//       //   const res = await axios.post('/auth/token',
//       //     {
//       //       "refresh_token": getRefreshToken()
//       //     });
          
//       //     if (res.status === 201) {
//       //       setToken(res.data);

//       //       axios.defaults.headers.common['Authorization'] = 'Bearer ' + getToken();

//       //       // 3) return originalRequest object with Axios.
//       //       return axios(originalRequest);
//       //     }

//       // }
//     })

export default Axios;