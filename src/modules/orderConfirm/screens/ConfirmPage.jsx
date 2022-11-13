import React, { useState } from "react";
import AppButton from "../../../globalComponents/AppButton";
import Bill from "../components/Bill";
import CustomerInfo from "../components/CustomerInfo";
import PageTitle from "../../../globalComponents/PageTitle";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../../store/Context";
import left from "../../../assests/images/orderConfirm/left.png";
import right from "../../../assests/images/orderConfirm/right.png";

export default function ConfirmPage() {
  const location = useLocation();
  const [listProducts, setListProducts] = useState(location.state);
  console.log("dataOrder", location.state);
  const [appState, dispatch] = useContext(UserContext);
  console.log("dataInfo", appState);
  
  return (
    <div className="flex flex-col align-center">
      <PageTitle title="XÁC NHẬN ĐƠN HÀNG" class="justify-center w-fit" />
      <div class="md:flex md:ml-10 md:m-4 mt-0">
        <div class="md:flex-initial md:w-[35%] md:p-10 md:h-full md:mt-0">
          <CustomerInfo name={appState.fullName} phone={appState.phoneNumber} address={appState.address[0].Value}/>
        </div>
        <div class="md:flex-initial md:h-full md:w-6/12 md:ml-10 flex flex-col justify-center items-center">
          <Bill class=" md:pl-10 md:ml-20" cat={listProducts}/>

          <AppButton
            text="Đặt hàng"
            className="w-fit "
          />
        </div>
      </div>
      <img
        src={right}
        alt=""
        className="absolute hidden top-[70px] right-0 -z-10 md:block md:w-[200px] lg:w-[230px]"
      />
      <img
        src={left}
        alt=""
        className="absolute hidden bottom-[-200px]  -z-10 md:block md:w-[250px] lg:w-[300px] "
      />
    </div>
  );
}
