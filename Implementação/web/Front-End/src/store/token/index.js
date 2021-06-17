const INITIAL_STATE = {
    token: {},
  };

// function getToken(state){
//     return state.token? JSON.parse(atob(state.token)) : null 
    
// }
  
function setToken(state,action){
    const newToken = action.value? btoa(action.value): null;
    return { ...state, token:newToken } 
}

function tokenReducer(state = INITIAL_STATE, action) {
    switch(action.type){
        case 'SETTOKEN' :           
            return setToken(state,action);
        default:
            
    }
    return state;
}

export default tokenReducer;