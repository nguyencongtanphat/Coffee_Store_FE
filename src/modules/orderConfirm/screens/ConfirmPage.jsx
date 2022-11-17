import React, { useState } from "react";
import AppButton from "../../../globalComponents/AppButton";
import Bill from "../components/Bill";
import CustomerInfo from "../components/CustomerInfo";
import PageTitle from "../../../globalComponents/PageTitle";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { CartContext, UserContext } from "../../../store/Context";
import left from "../../../assests/images/orderConfirm/left.png";
import right from "../../../assests/images/orderConfirm/right.png";
import NotAuthen from "../../../globalComponents/NotAuthen";
import havetoadd from "../../../assests/images/orderConfirm/havetoadd.png"
import { useEffect } from "react";
import { createAxiosInstance } from "../../../service";
import { element } from "prop-types";
import { deleteProductCart } from "../../../store/Actions";

export default function ConfirmPage() {
  const location = useLocation();
  const [listProducts, setListProducts] = useState(location.state)
  const [appState, dispatch] = useContext(UserContext);
  const [totalAmount, setTotalAmount] = useState(0);
  const ship=15000;

  const [cartState, cartDispatch] = useContext(CartContext);

  console.log("user info:.", appState);
  useEffect(()=>{
    let sum = 0;
     listProducts.forEach((item) => {
       sum += item.Price * item.Quantity;
     });
     setTotalAmount(sum+ship);
  },[listProducts])


  const orderHandler =async ()=>{
    try{
      const orderInfo = {
        Items: listProducts,
        CustomerType: "Member",
        CustomerID: appState.id,
        PhoneNumber: appState.phoneNumber,
        Address: appState.address[0].Value,
        TotalAmount: totalAmount,
      };

      console.log("thong tin trc khi gui:", orderInfo);

      const reponse = await createAxiosInstance().post(
        `order/create`,
        orderInfo
      );
      console.log("thong tin don hang sau khi gui:", reponse);
      
      //update cart state
      cartDispatch(deleteProductCart(listProducts));

    }catch(e){
        alert("Đã có lỗi xảy ra trong quá trình đặt xin hay thử lại trong giây lát " + e.message )
    }
    
  }

  return appState.isLogin ? (
    location.state != undefined ? (
      <div className="flex flex-col align-center">
        <PageTitle title="XÁC NHẬN ĐƠN HÀNG" class="justify-center w-fit" />
        <div class="md:flex md:ml-10 md:m-4 mt-0">
          <div class="md:flex-initial md:w-[35%] md:p-10 md:h-full md:mt-0">
            <CustomerInfo
              name={appState.fullName}
              phone={appState.phoneNumber}
              address={appState.address[0].Value}
            />
          </div>
          <div class="md:flex-initial md:h-full md:w-6/12 md:ml-10 flex flex-col justify-center items-center">
            <Bill
              class=" md:pl-10 md:ml-20"
              cat={listProducts}
              totalAmount={totalAmount}
              ship={ship}
            />

            <AppButton
              text="Đặt hàng"
              className="w-fit "
              onClick={orderHandler}
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
    ) : (
      <div className="flex items-center flex-col">
        <img src={havetoadd} className="w-[40%] mx-auto block" alt=""></img>
        <h2 className="text-center text-h2 mt-3 mb-3 text-orange">
          Bạn cần chọn ít nhất một sản phẩm trong Giỏ hàng để Xác nhận đơn
          hàng!!!
        </h2>
        <AppButton text="Giỏ hàng" className="bg-orange mt-3 mb-10" />
      </div>
    )
  ) : (
    <NotAuthen />
  );
}
