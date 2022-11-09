import React, { useState } from "react";
import AppButton from "../../../globalComponents/AppButton";
import bgCoffee from "../../../assests/images/login/bg-coffee.png";
import Modal from "../../../globalComponents/Modal";
import { useRef } from "react";
import axios from "axios";
import HttpService from "../../../service";

function SigninPopup({ className, togglePopupSignup, togglePopupLogin }) {
  const fullNameInput = useRef("");
  const userNameInput = useRef("");
  const numberPhoneInput = useRef("");
  const passwordInput = useRef("");
  const addressInput = useRef("");

  const isValid = (input) => {
    let className = input.current.className;
    if (input.current.value === "") {
      className = className.replace(" border-gray ", " border-rose-600 ");
      className = className.replace(" border ", " border-2 ");
      input.current.className = className;
      return false;
    } else {
      className = className.replace(" border-rose-600 ", " border-gray ");
      className = className.replace(" border-2 ", " border ");
      input.current.className = className;
      return true;
    }
  };
  const successSignupHandler = () => {
    togglePopupSignup();
    togglePopupLogin();
  };
  const submitHandler = async () => {
    try {
      let isFullNameValid = isValid(fullNameInput);
      let isUserNameValid = isValid(userNameInput);
      let isPasswordValid = isValid(passwordInput);
      let isNumberPhoneValid = isValid(numberPhoneInput);
      let isAddressValid = isValid(addressInput);
      if (
        isFullNameValid &&
        isUserNameValid &&
        isPasswordValid &&
        isNumberPhoneValid &&
        isAddressValid
      ) {
        const userInfo = {
          fullName: fullNameInput.current.value,
          Username: userNameInput.current.value,
          Password: passwordInput.current.value,
          PhoneNumber: numberPhoneInput.current.value,
          Address: addressInput.current.value,
        };
        const response = await axios.post(
          HttpService.appUrl + "/user/signup",
          userInfo
        );
        console.log(response);
        alert("Bạn đã đăng kí thành công");
        successSignupHandler();
       
      } else {
        alert("Bạn cần nhập đầy đủ thông tin!!!");
      }
    } catch (e) {
      alert("Tên người dùng đã được sử dụng hãy chọn tên người dùng khác");
      userNameInput.current.value = "";
    }
  };

  return (
    <Modal>
      <div
        className={`${className} w-full h-screen absolute top-0 bg-black bg-opacity-75 flex justify-center items-center`}
      >
        <div className="flex flex-col justify-center items-center md:flex-row">
          <div className="flex justify-center items-center">
            <div className="w-[294px] h-[310px] rounded-t-2xl md:w-[382px] md:h-[505px] md:relative md:rounded-none md:rounded-l-2xl bg-beige100 flex justify-center items-center order-1 md:order-2">
              <div className="">
                <div className="md:hidden">
                  <p className="mt-[3px] mr-[-20px] text-black text-opacity-60 text-[20px] text-end hover:text-brown cursor-pointer md:text-[25px]">
                    x
                  </p>
                </div>
                <div className="">
                  <p className="mt-[-20px] text-orange text-b7 text-center md:text-b5 md:text-start md:mt-[70px]">
                    Đăng ký
                  </p>
                </div>

                {/* fullName */}
                <div className="">
                  <input
                    ref={fullNameInput}
                    className="w-[198px] h-[32px] mt-[7px] p-0 pl-[11px] text-[11px] 
                                bg-transparent rounded-md border border-solid  border-gray outline-none 
                                md:w-[328px] md:h-[48px] md:text-b13"
                    type="text"
                    placeholder="Nhập họ tên"
                  />
                </div>
                {/* userName */}
                <div className="">
                  <input
                    ref={userNameInput}
                    className="w-[198px] h-[32px] mt-[7px] p-0 pl-[11px] text-[11px] 
                                bg-transparent rounded-md border border-solid border-gray outline-none 
                                md:w-[328px] md:h-[48px] md:text-b13"
                    type="text"
                    placeholder="Nhập Username"
                  />
                </div>

                {/* số điện thoại */}
                <div className="">
                  <input
                    ref={numberPhoneInput}
                    className="w-[198px] h-[32px] mt-[7px] p-0 pl-[11px] text-[11px] 
                                bg-transparent rounded-md border border-solid border-gray outline-none 
                                md:w-[328px] md:h-[48px] md:text-b13 "
                    type="tel"
                    placeholder="Nhập số điện thoại"
                  />
                </div>

                {/* mật khẩu */}
                <div className="">
                  <input
                    ref={passwordInput}
                    className="w-[198px] h-[32px] mt-[7px] p-0 pl-[11px] text-[11px] 
                                bg-transparent rounded-md border border-solid border-gray outline-none 
                                md:w-[328px] md:h-[48px] md:text-b13"
                    type="password"
                    placeholder="Nhập mật khẩu"
                  />
                </div>
                {/* address */}
                <div className="">
                  <input
                    ref={addressInput}
                    className="w-[198px] h-[32px] mt-[7px] p-0 pl-[11px] text-[11px] 
                                bg-transparent rounded-md border border-solid border-gray outline-none 
                                md:w-[328px] md:h-[48px] md:text-b13"
                    type="address"
                    placeholder="Nhập địa chỉ mặc định ở đây"
                  />
                </div>
                <div className="">
                  <AppButton
                    onClick={submitHandler}
                    className="w-full h-[32px] mt-[18px] text-b17 flex items-center rounded-md md:w-[342px] md:h-[53px] md:mt-[32px] md:text-b10"
                    text="Đăng ký"
                  />
                </div>
                <div className="md:flex md:justify-end md:bottom-3">
                  <p className="mt-[8px] text-orange text-[11px] text-center md:mt-[7px]">
                    Đăng nhập
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center item-center">
            <img
              src={bgCoffee}
              alt=""
              className="w-[294px] h-[174px] object-cover rounded-b-2xl md:w-full md:h-auto md:rounded-none md:rounded-r-2xl"
            />
          </div>
          <div
            className="invisible md:visible md:absolute"
            onClick={() => {
              togglePopupSignup();
            }}
          >
            <p className="md:mt-[-235px] md:mr-[-350px] md:text-white text-opacity-60 text-[20px] text-end hover:text-orange cursor-pointer md:text-[25px]">
              x
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
}
export default SigninPopup;
