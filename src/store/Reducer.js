import { createAxiosInstance } from "../service";
import { ADD_NEW_CART_PRODUCT, DELETE_PRODUCT_FROM_CART, FETCH_CART_FROM_SERVER, SET_STATE_LOGIN, SET_STATE_LOGOUT } from "./Constant";

const initAppState = {
  id: "",
  fullName: "",
  phoneNumber: "",
  userName: "",
  isLogin: false,
  address:[],
};

const initCartState = [];

const AppReducer = (currentState, action) => {
  switch (action.type) {
    case SET_STATE_LOGIN: {
      const userinfo = action.payload.user;
      const userAddress = action.payload.address;
      return {
        ...currentState,
        id: userinfo.id,
        fullName: userinfo.Fullname,
        phoneNumber: userinfo.PhoneNumber,
        userName: userinfo.Username,
        isLogin: true,
        address: [...userAddress],
      };
    }
    case SET_STATE_LOGOUT:{
      return {
        id: "",
        fullName: "",
        phoneNumber: "",
        userName: "",
        isLogin: false,
        address: [],
      };
    }
    default:
      throw new Error("this Action is not supported");
  }
};

const CartReducer =  (currentState, action) =>{
  switch (action.type) {
    case ADD_NEW_CART_PRODUCT:
      {
        const product = action.payload;
        console.log("new product: ", action.payload);
        //post new product to cart
         createAxiosInstance()
           .post("cart", {
             ...product,
           })
           .then(function (response) {
             console.log("response add new product: ", response);
           })
           .catch(function (error) {
             console.log(error);
           });
           //get product for cart
           
         return;
      }
     
    case FETCH_CART_FROM_SERVER:
      return [
        ...action.payload,
      ]
    case DELETE_PRODUCT_FROM_CART:
      {   
        const deletedId = action.payload.map(item => item.id);
        console.log("deletedId:", deletedId);
        
        //updateState cart global state
        const cartAfterDelete = currentState.filter(
          (item) => deletedId.indexOf(item.id) === -1
        );
        console.log("cart after delete:", cartAfterDelete)
        return cartAfterDelete;

      }
    default:
      throw new Error("this Action is not supported");

  }
}


export { initAppState, AppReducer, initCartState, CartReducer };
