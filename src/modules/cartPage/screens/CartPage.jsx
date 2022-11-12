import React, { useEffect, useState } from "react";
import AppButton from "../../../globalComponents/AppButton";
import PageTitle from "../../../globalComponents/PageTitle";
import Table from "../components/Table";
import leafBgR from "../../../assests/images/global/leaf-bg-right.png";
import leafBgL from "../../../assests/images/global/leaf-bg-left.png";
import { useContext } from "react";
import { CartContext } from "../../../store/Context";
import axios from "axios";
import HttpService, { FormatterService } from "../../../service";
import { UserContext } from "../../../store/Context";
import { addNewProductCart, fetchCartFromServer } from "../../../store/Actions";
import {  useNavigate } from "react-router-dom";

function CartPage() {
  
   const navigate = useNavigate();
  const [cartState, cartDispatch] = useContext(CartContext);

  const [appState, dispatch] = useContext(UserContext);
  const [sumBill, setSumBill] = useState(0);
  const [listCartConfirm, setListCartConfirm] = useState([]);

  
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(HttpService.appUrl + "/cart/1",{
        withCredentials:true,
      });
      
      console.log("data: ", response)
      
    }
    fetchData();
  }, [cartDispatch, appState]);

  const updateSumBill = (product, type) => {
    //add product to list confirm
    if (type === "add") {
      setSumBill((prev) => {
        return prev + product.Price * product.Quantity;
      });
      setListCartConfirm((pre) => {
        return [product, ...pre];
      });
    } else {
      //remove product to list confirm
      setListCartConfirm((pre) => {
        return pre.filter((item) => item.id !== product.id);
      });
      setSumBill((prev) => {
        return prev - product.Price * product.Quantity;
      });
    }
  };

  const payHandler = () => {
    if (listCartConfirm.length>0){
      navigate("/confirm", {
        state: listCartConfirm,
      });
    }else{
      alert("Bạn cần chọn 1 sản phẩm để lên đơn!!!")
    }
      
  };

  return appState.isLogin ? (
    <div className="w-full relative">
      <div className={`flex flex-col items-center p-2 `}>
        <PageTitle title="Giỏ hàng"></PageTitle>
        <h2 className="text-b12 text-grey300 md:text-b6 mb-3">
          Các món đã chọn
        </h2>
        <Table updateSumBill={updateSumBill} />
        <div className="flex items-end justify-center p-2">
          <span className=" text-b10 font-bold mr-1 leading-6 md:text-b8">
            Tổng tiền:
          </span>
          <span className="text-brown text-b6">
            {FormatterService.format(sumBill)}
          </span>
        </div>
        <AppButton text="Thanh toán" onClick={payHandler} />
      </div>
      {/* image background */}
      <img
        src={leafBgR}
        alt=""
        className="absolute hidden top-0 right-0 -z-10 md:block md:w-[300px] lg:w-[400px]"
      />
      <img
        src={leafBgL}
        alt=""
        className="absolute hidden top-0  -z-10 md:block md:w-[300px] lg:w-[400px] "
      />
    </div>
  ) : (
    <h1 className="text-center">You need to loggin to see cart</h1>
  );
}

export default CartPage;
