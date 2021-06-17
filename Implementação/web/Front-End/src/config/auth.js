
import { isExpired } from "react-jwt";
export const TOKEN_KEY = process.env.REACT_APP_USER_KEY;

export const isExpiredToken = () => {


  if (localStorage.getItem(TOKEN_KEY)) {
    let tokenCode = localStorage.getItem(TOKEN_KEY)
    let token = JSON.parse(atob(tokenCode))

    if (token) {
      return isExpired(token.access_token)
    } else {
      return true
    }
  }
  return null
}

export const getContaAcesso = () => {

  if (localStorage.getItem(TOKEN_KEY)) {

    let sessao = atob(localStorage.getItem(TOKEN_KEY))
    let sessaoJson = JSON.parse(sessao)
    console.log(sessaoJson)
    return sessaoJson.user
  }

  return null

}

export const isAuthenticated = () => {
  return localStorage.getItem(TOKEN_KEY) !== null
};

export const GetToken = () => {
  return localStorage.getItem(TOKEN_KEY) ? atob(localStorage.getItem(TOKEN_KEY)) : null
};

export const setToken = token => {
  localStorage.setItem(TOKEN_KEY, btoa(token));
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const refreshToken = () => {

  let formData = new URLSearchParams();
  formData.append('grant_type', 'refresh_token');

  delete window.$http.defaults.headers.common['Content-Type']

  window.$http.defaults.headers.common['Authorization'] = `Basic ${btoa(process.env.REACT_APP_USERNAME_API + ":" + process.env.REACT_APP_PASSWORD_API)}`;

  return window.$http.post(`/oauth/token`, formData, {
    withCredentials: true,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8' }
  }).then(res => {

    if (res && res.status >= 200 & res.status <= 299) {
      let userlogado = JSON.parse(GetToken());
      userlogado.token = res.data
      logout()
      setToken(JSON.stringify(userlogado))

      return true
    } else {

      logout()
      return false
      // context.dispatch('logoutUsuario')
    }

  })
    .catch(() => {
      window.$toast.add({ severity: 'error', summary: "Sua sessão expirou! Por favor Logue novamente", life: 3000 })
      logout()
    })



}