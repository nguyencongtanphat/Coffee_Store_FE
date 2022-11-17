import { createAxiosInstance } from "../service";
import {
  ADD_NEW_CART_PRODUCT,
  DELETE_PRODUCT_FROM_CART,
  FETCH_CART_FROM_SERVER,
  SET_STATE_LOGIN,
} from "./Constant";

const initAppState = {
  id: "",
  fullName: "",
  phoneNumber: "",
  userName: "",
  isLogin: false,
  address: [],
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

    default:
      throw new Error("this Action is not supported");
  }
};

const CartReducer =async (currentState, action) => {
  switch (action.type) {
    case ADD_NEW_CART_PRODUCT:
      return [action.payload, ...currentState];
    case FETCH_CART_FROM_SERVER:
   
      const newCart = [...action.payload];
      console.log("list item at reducer: ", newCart);
      return newCart;
    case DELETE_PRODUCT_FROM_CART:
      {
        try{
        const deletedId = action.payload.map(item => item.id);
        console.log("deletedId:", deletedId);
        console.log("cart before delete:", currentState);

        //delete the product database
        const response = await createAxiosInstance().delete("cart", {
          IDs: deletedId,
        });
        console.log("response delete item from cart database:", response);
        //updateState call
        const cartAfterDelete = currentState.filter(
          (item) => deletedId.indexOf(item.id) === -1
        );
        console.log("cart after delete:", cartAfterDelete)
        return cartAfterDelete;


        }catch(e){
          alert("Đã có lỗi xảy ra xin thử lại trong sau. " + e.message )
        }
         break;
      }
     
    default:
      throw new Error("this Action is not supported");
  }
};

export { initAppState, AppReducer, initCartState, CartReducer };
