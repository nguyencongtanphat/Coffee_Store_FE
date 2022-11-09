import { SET_STATE_LOGIN } from "./Constant";

export const setStatusLogin = (payload)=>{
    return {
      type: SET_STATE_LOGIN,
      payload
    };
}