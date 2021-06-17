export const baseApiUrl = process.env.REACT_APP_API_URL

export const sexo = [ {name: 'Masculino', code: "M"},  {name: 'Feminino', code: "F"}]

export const simNao = [{name: 'Não', code: "N"}, {name: 'Sim', code: "S"}]

export function exibirErroTratado(error, severity, info){
  // Cria as variavel de mensagem ao usuário
  let msgUsuario = ''
  
  // Verifica mensagem retornada
  if(error && error.response && error.response.data) {
      if (Array.isArray(error.response.data) && error.response.data[0].msgUsuario){
          msgUsuario = error.response.data[0].msgUsuario
      }
      else{
          msgUsuario = error.response.data
      }
  } 
  else if(typeof error === 'string'){
      msgUsuario = error
  }
  else {
      msgUsuario = info
  }
  
  if(typeof msgUsuario != 'object'){
    window.$toast.current.show({severity, summary: msgUsuario, life: 6000})
  }
}