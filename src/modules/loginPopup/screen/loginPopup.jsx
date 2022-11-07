import React, { useState } from "react";
import AppButton from "../../../globalComponents/AppButton";
import InputField from "../../orderConfirm/components/InputField";
//import bgCoffee from "d:/CUOIKY/Coffee_Store_FE/src/assests/images/login/bg-coffee.png";
import bgCoffee from "../../../assests/images/login/bg-coffee.png";
import Modal from "../../../globalComponents/Modal";
function LoginPopup({className}) {
  const [popup, setPop] = useState(false);
  const handleClickOpen = () => {
    setPop(!popup);
  };
  const closePopup = () => {
    setPop(false);
  };
  return (
    <Modal className={className}>
      <div className="w-full h-screen absolute top-0 bg-black bg-opacity-75 flex justify-center items-center">
        <div className="flex flex-col justify-center items-center md:flex-row">
          <div className="flex justify-center item-center order-2 md:order-1">
            <img
              src={bgCoffee}
              alt=""
              className="w-[294px] h-[174px] object-cover rounded-b-2xl md:w-full md:h-auto md:rounded-none md:rounded-l-2xl"
            />
          </div>
          <div className="flex justify-center items-center order-1 md:order-2">
            <div className="w-[294px] h-[225px] rounded-t-2xl md:w-[382px] md:h-[505px] md:relative md:rounded-none md:rounded-r-2xl bg-beige100 flex justify-center items-center order-1 md:order-2">
              <div className="md:ml-[10px]">
                <div className="">
                  <p className="mt-5 text-orange text-b7 text-center md:text-b5 md:text-start">
                    Đăng nhập
                  </p>
                </div>
                <div className="">
                  <input
                    className="w-[198px] h-[32px] mt-[18px] p-0 pl-[11px] text-[11px] 
                                bg-transparent rounded-md border border-double border-gray outline-none 
                                md:w-[328px] md:h-[48px] md:text-b13"
                    type="tel"
                    placeholder="Nhập số điện thoại"
                  />
                </div>
                <div className="">
                  <input
                    className="w-[198px] h-[32px] mt-[7px] p-0 pl-[11px] text-[11px] 
                                bg-transparent rounded-md border border-double border-gray outline-none 
                                md:w-[328px] md:h-[48px] md:text-b13"
                    type="password"
                    placeholder="Nhập mật khẩu"
                  />
                </div>
                <div>
                  <p className="mt-[7px] text-[10px] text-end">Quên mật khẩu</p>
                </div>
                <div className="">
                  <AppButton
                    className="w-full h-[32px] mt-[7px] text-b17 flex items-center rounded-md md:w-[342px] md:h-[53px] md:text-b10"
                    text="Đăng nhập"
                  />
                </div>
                <div className="md:absolute md:bottom-3">
                  <p className="mt-[8px] mb-[8px] text-orange text-[11px] text-center ">
                    Đăng ký
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
export default LoginPopup;
