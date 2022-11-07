import { SET_STATE_LOGIN } from "./Constant";

const initState ={
    userInfo:{},
    isLogin:false,
}

const Reducer = (currentState, action)=>{
    switch(action.type)
    {
        case SET_STATE_LOGIN:
            return console.log("login")
        default:
            throw new Error("this Action is not supported");
    }
}

export default Reducer;
export {initState}


