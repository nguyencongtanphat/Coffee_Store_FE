import { ADD_NEW_CART_PRODUCT, FETCH_CART_FROM_SERVER, SET_STATE_LOGIN } from "./Constant";

export const setStatusLogin = (payload)=>{
    return {
      type: SET_STATE_LOGIN,
      payload
    };
}

export const addNewProductCart= (payload)=>{
  return {
    type: ADD_NEW_CART_PRODUCT,
    payload,
  }
}

export const fetchCartFromServer = (payload) => {
  return {
    type: FETCH_CART_FROM_SERVER,
    payload,
  };
};