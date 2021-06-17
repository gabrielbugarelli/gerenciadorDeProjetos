const INITIAL_STATE = {
  nome: null,
};

function setSistema(state,action){
  const newSistema = action.value? btoa(action.value): null;
  return { ...state, Sistema:newSistema } 
}

function sistemaReducer(state = INITIAL_STATE, action) {
  if(action.type === 'SETSistema') {
      return setSistema(state,action);
  }
  return state
}

export default sistemaReducer;
