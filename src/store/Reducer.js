import { SET_STATE_LOGIN } from "./Constant";

const initState = {
  id: "",
  fullName: "",
  phoneNumber: "",
  userName: "",
  isLogin: false,
};

const Reducer = (currentState, action) => {
  switch (action.type) {
    case SET_STATE_LOGIN: {
      console.log(action.payload);
      const userinfo = action.payload.userInfo.user;
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

export default Reducer;
export { initState };
