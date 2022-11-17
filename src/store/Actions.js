import { ADD_NEW_CART_PRODUCT, DELETE_PRODUCT_FROM_CART, FETCH_CART_FROM_SERVER, SET_STATE_LOGIN } from "./Constant";

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


export const deleteProductCart = (payload) => {
  return {
    type:DELETE_PRODUCT_FROM_CART,
    payload,
  }
};

export const fetchCartFromServer = (payload) => {
  return {
    type: FETCH_CART_FROM_SERVER,
    payload,
  };
};