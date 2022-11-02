import React from "react";
import AppButton from "../../../globalComponents/AppButton";
import AppButton2 from "../components/AppButton2";
import PageTitle from "../../../globalComponents/PageTitle";
import leafBgR from "../../../assests/images/global/leaf-bg-right.png"
import leafBgL from "../../../assests/images/global/leaf-bg-left.png";
import chitietCoffee from "d:/3rd/Coffee_Store_FE/src/assests/images/chitietPage/chitietCoffee.png"
import PropTypes from "prop-types";

function ChitietPage() {
  const test = () => {
    alert("jjsdnfjnsj");
  };
  return (
    <div className="w-full relative">
      <div className={`flex flex-col justify-center items-center p-2 `}>
        <PageTitle title="CÀ PHÊ"></PageTitle>
        <h2 className="text-b13 text-grey100 md:text-b6 mb-3">
          Thông tin sản phẩm
        </h2>
        <div className="flex flex-col md:flex-row justify-center">
            <div>
              <div className="flex">
                <img
                  src={chitietCoffee}
                  alt=""
                  className="w-[283px] h-auto md:w-[420px] md:h-auto"
                />
              </div>
            </div>
            <div className="md:ml-[30px]">
              <div className="w-[283px] h-auto md:w-[480px]">
                <p className="mt-[20px] md:mt-0 text-brown text-b7 lg:text-b5">Cà phê Mouse Kem Cheese</p>
                <p className="mt-[10px] text-orange text-b5">32.000đ</p>
                <p className="mt-[10px] text-gray-500 text-b13 md:text-b11 lg:text-b9">CloudFee Creme Brulee Caramel ngon khó cưỡng bởi lớp 
                  kem trứng Creme Brulee bồng bềnh béo mịn, ngọt thanh 
                  của Caramel, thêm xíu đắng nhẹ từ cà phê, kèm topping 
                  thạch cà phê dai dai giòn giòn. </p>
              </div>
              <div className="mt-[10px] flex flex-row w-[425px] h-auto items-center">
                <p className="text-b11 md:text-b10 lg:text-b9">Size:</p>
                <AppButton2 className="ml-[10px]" text="Vừa (+0đ)" />
                <AppButton2 className="ml-[10px]" text="Lớn (+10.000đ)" />
              </div>
              <div>
                <div className="mt-[10px] flex flex-row w-[600px] h-auto items-center">
                  <p className="text-b11 md:text-b10 lg:text-b9">Topping:</p>
                  <AppButton2 className="ml-[10px]" text="Macchiato (+5.000đ)" />
                  <AppButton2 className="ml-[10px]" text="Sốt caramel (+7.000đ)" />
                </div>
                <AppButton2 className="mt-[10px] ml-[65px]" text="Trân châu trắng (+10.000đ)" />
              </div>
              <did className="flex flex-row mt-[10px] items-center">
                <p className="text-b11 md:text-b10 lg:text-b9">Số lượng:</p>
                <p className="text-b11 md:text-b10 lg:text-b9 ml-[10px] text-gray-400">-</p>
                <AppButton2 className="ml-[10px]" text="1" />
                <p className="text-b11 md:text-b10 lg:text-b9 ml-[10px] text-gray-400">+</p>
              </did>
              <div className="flex flex-col md:flex-row">
                  <AppButton className="mt-[15px] items-center w-[300px]" text="Thêm vào giỏ hàng"/>
                  <AppButton className="md:ml-[10px] mt-[15px] items-center w-[300px]" text="Đặt hàng ngay"/>
              </div>
            </div>
        </div>
      </div>
      <img
        src={leafBgR}
        alt=""
        className="absolute hidden top-0 right-0 -z-10 md:block md:w-[300px] lg:w-[400px]"
      />
      <img
        src={leafBgL}
        alt=""
        className="absolute hidden top-0 -z-10 md:block md:w-[300px] lg:w-[400px] "
      />
    </div>
  );
}

export default ChitietPage;
