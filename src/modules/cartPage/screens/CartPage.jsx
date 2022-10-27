import React from "react";
import AppButton from "../../../globalComponents/AppButton";
import PageTitle from "../../../globalComponents/PageTitle";
import Table from "../components/Table";
import style from "../index.module.css"


function CartPage() {
  const test = () => {
    alert("jjsdnfjnsj");
  };
  return (
    <div className={`${style.cartPage} w-100`}>
      <div className={`flex flex-col items-center p-2 `}>
        <PageTitle title="Giỏ hàng"></PageTitle>
        <h2 className="text-b12 text-grey300 md:text-b6 mb-3">
          Các món đã chọn
        </h2>
        <Table />
        <div className="flex items-end justify-center p-2">
          <span className=" text-b10 font-bold mr-1 leading-6 md:text-b8">
            Tổng tiền:
          </span>
          <span className="text-brown text-b6">181.000đ</span>
        </div>
        <AppButton text="Thanh toán" onClick={test} />
      </div>
    </div>
  );
}

export default CartPage;