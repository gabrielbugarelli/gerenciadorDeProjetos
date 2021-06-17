import  {getContaAcesso}  from "../../config/auth.js";

const INITIAL_STATE = {
    user: iniciar(),
};

function iniciar(){
    return getContaAcesso()
}

// function getUser(state){
//     return state.user? state.user : null 
// }
  
function setUser(state,action){
    const newUser = action.value? action.value: null;
    return { ...state, user:newUser } 
}

function userReducer(state = INITIAL_STATE, action) {
    if(action.type === 'SETUSER') {
        return setUser(state,action);
    }
    return state
}

export default userReducer;
