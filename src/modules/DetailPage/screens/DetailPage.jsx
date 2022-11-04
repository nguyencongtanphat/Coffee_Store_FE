import React from "react";
import AppButton from "../../../globalComponents/AppButton";
import AppButton2 from "../components/AppButton2";
import PageTitle from "../../../globalComponents/PageTitle";
import leafBgR from "../../../assests/images/global/leaf-bg-right.png";
import leafBgL from "../../../assests/images/global/leaf-bg-left.png";
import chitietCoffee from "../../../assests/images/chitietPage/chitietCoffee.png";
import HttpService from "../../../service";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const formatter = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
});

function DetailPage() {
  const [dtInfo, setDtInfo] = useState({});
  const [size, setSize] = useState("S");
  const [price, setPrice] = useState(1);
  const [number, setNumber] = useState(2);

  //fetchData
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(HttpService.appUrl + "/menu/products/1");
      setDtInfo(response.data.data);
      console.log(dtInfo);
    }
    fetchData();
  }, []);

  //update price
  useEffect(() => {
    if (size === "S") setPrice(() => dtInfo.SPrice);
    else if (size === "M") setPrice(() => dtInfo.MPrice);
    else setPrice(() => dtInfo.LPrice);
  }, [dtInfo.MPrice, dtInfo.SPrice, dtInfo.LPrice, size]);

  const changeSize = (sz) => {
    console.log(sz);
    setSize(() => sz);
  };

  const changeNumber = (type) => {
    if (type === "add") {
      setNumber((preNum) => ++preNum);
    } else {
      if(number !== 1)
        setNumber((preNum) => --preNum);

    }
    
  };
  return (
    <div className="w-full relative">
      <div className={`flex flex-col justify-center items-center p-2 `}>
        <h2 className="text-b13 text-grey100 md:text-b6 mb-3 md:mb-5">
          Thông tin sản phẩm
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center">
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
              <p className="mt-[20px] md:mt-0 text-brown text-b7 lg:text-b5">
                {dtInfo.Name || "default"}
              </p>
              <p className="mt-[10px] text-orange text-b5">
                {formatter.format(price)}
              </p>
              <p className="mt-[10px] text-gray-500 text-b13 md:text-b11 lg:text-b9">
                CloudFee Creme Brulee Caramel ngon khó cưỡng bởi lớp kem trứng
                Creme Brulee bồng bềnh béo mịn, ngọt thanh của Caramel, thêm xíu
                đắng nhẹ từ cà phê, kèm topping thạch cà phê dai dai giòn giòn.{" "}
              </p>
            </div>
            <div className="mt-[10px] flex flex-row w-[425px] h-auto items-center">
              <p className="text-b11 md:text-b10 lg:text-b9">Size:</p>
              <AppButton2
                className={`ml-[10p`}
                isActive={size === "S"}
                text="S"
                onClick={changeSize.bind(null, "S")}
              />
              <AppButton2
                className="ml-[10px]"
                isActive={size === "M"}
                text="M"
                onClick={changeSize.bind(null, "M")}
              />
              <AppButton2
                className="ml-[10px]"
                isActive={size === "L"}
                text="L"
                onClick={changeSize.bind(null, "L")}
              />
            </div>
            <div>
              <div className="mt-[10px] flex flex-row w-[600px] h-auto items-center">
                <p className="text-b11 md:text-b10 lg:text-b9">Topping:</p>
                <AppButton2 className="ml-[10px]" text="Macchiato (+5.000đ)" />
                <AppButton2
                  className="ml-[10px]"
                  text="Sốt caramel (+7.000đ)"
                />
              </div>
              <AppButton2
                className="mt-[10px] ml-[65px]"
                text="Trân châu trắng (+10.000đ)"
              />
            </div>
            <did className="flex flex-row mt-[10px] items-center">
              <p className="text-b11 md:text-b10 lg:text-b9">Số lượng:</p>
              <p
                className="text-b11 md:text-b10 lg:text-b10 ml-[10px] text-gray-400 cursor-pointer"
                onClick={changeNumber.bind(null, "minus")}
              >
                -
              </p>
              <AppButton2 className="ml-[10px]" text={number} />
              <p
                className="text-b11 md:text-b10 lg:text-b10 ml-[10px] text-gray-400 cursor-pointer"
                onClick={changeNumber.bind(null, "add")}
              >
                +
              </p>
            </did>
            <div className="flex flex-col md:flex-row">
              <AppButton
                className="mt-[15px] items-center w-[300px]"
                text="Thêm vào giỏ hàng"
              />
              <AppButton
                className="md:ml-[10px] mt-[15px] items-center w-[300px]"
                text="Đặt hàng ngay"
              />
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

export default DetailPage;
