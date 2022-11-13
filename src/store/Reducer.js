import { ADD_NEW_CART_PRODUCT, FETCH_CART_FROM_SERVER, SET_STATE_LOGIN } from "./Constant";

const initAppState = {
  id: "",
  fullName: "",
  phoneNumber: "",
  userName: "",
  isLogin: false,
};

const initCartState = [];

const AppReducer = (currentState, action) => {
  switch (action.type) {
    case SET_STATE_LOGIN: {
      const userinfo = action.payload;
      return {
        ...currentState,
        id: userinfo.id,
        fullName: userinfo.Fullname,
        phoneNumber: userinfo.PhoneNumber,
        userName: userinfo.Username,
        isLogin: true,
      };
    }

    default:
      throw new Error("this Action is not supported");
  }
};

const CartReducer = (currentState, action) =>{
  switch (action.type) {
    case ADD_NEW_CART_PRODUCT:
      return [
        action.payload,
        ...currentState
      ]
    case FETCH_CART_FROM_SERVER:
      return [
        ...action.payload,
      ]
    default:
      throw new Error("this Action is not supported");

  }
}


export { initAppState, AppReducer, initCartState, CartReducer };
