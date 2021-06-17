const INITIAL_STATE = {
    loaderAtivo: false,
  };

function setLoad(state,action){
    const loader = action.value? action.value: false;
    return { ...state, loaderAtivo:loader } 
}

function loaderReducer(state = INITIAL_STATE, action) {
    if(action.type === 'SETLOAD') {
        return setLoad(state,action);
    }
    return state
}

export default loaderReducer;