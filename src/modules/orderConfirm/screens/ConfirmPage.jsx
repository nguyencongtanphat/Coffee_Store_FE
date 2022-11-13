import React, { useState } from "react";
import AppButton from "../../../globalComponents/AppButton";
import Bill from "../components/Bill";
import CustomerInfo from "../components/CustomerInfo";
import PageTitle from "../../../globalComponents/PageTitle";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../../store/Context";

export default function ConfirmPage() {
  const location = useLocation();
  const [listProducts, setListProducts] = useState(location.state);
  console.log("dataOrder", location.state);
  const [appState, dispatch] = useContext(UserContext);
  console.log("dataInfo", appState);
  
  return (
    <div className="flex flex-col align-center">
      <PageTitle title="XÁC NHẬN ĐƠN HÀNG" class="justify-center w-fit" />
      <div class="md:flex md:ml-10 md:m-16">
        <div class="md:flex-initial md:w-[35%] md:p-10 md:h-full">
          <CustomerInfo name={appState.fullName} phone={appState.phoneNumber} address="default"/>
        </div>
        <div class="md:flex-initial md:h-full md:w-6/12 md:ml-10 flex flex-col justify-center items-center">
          <Bill class=" md:pl-10 md:ml-20" cat={listProducts}/>

          <AppButton
            text="Đặt hàng"
            className="w-fit "
          />
        </div>
      </div>
    </div>
  );
}
