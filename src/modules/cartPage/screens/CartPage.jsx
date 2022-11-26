import React, { useEffect, useState } from "react";
import AppButton from "../../../globalComponents/AppButton";
import PageTitle from "../../../globalComponents/PageTitle";
import Table from "../components/Table";
import leafBgR from "../../../assests/images/global/leaf-bg-right.png";
import leafBgL from "../../../assests/images/global/leaf-bg-left.png";
import { useContext } from "react";
import { CartContext } from "../../../store/Context";
import { createAxiosInstance, FormatterService } from "../../../service";
import { UserContext } from "../../../store/Context";
import { useNavigate } from "react-router-dom";
import NotAuthen from "../../../globalComponents/NotAuthen";
import { deleteProductCart, fetchCartFromServer } from "../../../store/Actions";
import { faTrash, faCreditCard } from "@fortawesome/free-solid-svg-icons";
function CartPage() {
  const navigate = useNavigate();
  const [cartState, cartDispatch] = useContext(CartContext);
  const [appState] = useContext(UserContext);
  const [sumBill, setSumBill] = useState(0);
  const [listCartSelected, setListCartSelected] = useState([]);

  const updateSumBill = (product, type) => {
    //add product to list confirm
    if (type === "add") {
      setSumBill((prev) => {
        return prev + product.Price * product.Quantity;
      });
      setListCartSelected((pre) => {
        return [product, ...pre];
      });
    } else {
      //remove product to list confirm
      setListCartSelected((pre) => {
        return pre.filter((item) => item.id !== product.id);
      });
      setSumBill((prev) => {
        return prev - product.Price * product.Quantity;
      });
    }
  };

  const payHandler = () => {
    if (listCartSelected.length > 0) {
      navigate("/confirm", {
        state: listCartSelected,
      });
    } else {
      alert("Bạn cần chọn 1 sản phẩm để lên đơn!!!");
    }
  };

  useEffect(() => {
    async function fetchData() {
      console.log("app call cart ");
      if (appState.isLogin) {
        const response = await createAxiosInstance().get(`cart/${appState.id}`);
        console.log("cart response:", response);
        const listCart = response.data.data;
        cartDispatch(fetchCartFromServer(listCart));
      }
    }
    fetchData();
  }, [cartDispatch, appState.isLogin, appState.id]);

  const deleteProductCartHandler = async()=>{
    try{
      //delete product from cart db 
      const listIdDeleted = listCartSelected.map((item) => item.id);
      const response = await createAxiosInstance().delete("cart", {
        data: {
          IDs: listIdDeleted,
        },
      });
      cartDispatch(deleteProductCart(listCartSelected));
      console.log("delete res:", response);
      setListCartSelected([]);
      alert("Xóa thành công");
    }
    catch(e){
      alert("Đã xảy ra lỗi do ", e.message);
    }
    
  }
  return appState.isLogin ? (
    <div className="w-full relative">
      <div className={`flex flex-col items-center p-2 `}>
        <PageTitle title="Giỏ hàng"></PageTitle>
        {cartState.length !== 0 && (
          <h2 className="text-b12 text-grey300 md:text-b6 mb-3">
            Các món đã chọn
          </h2>
        )}
        {/* delete button */}
        {listCartSelected.length > 0 && (
          <div className="w-[90%] lg:w-[60%] mb-2 flex justify-end">
            <AppButton
              onClick={deleteProductCartHandler}
              text="Xóa"
              className="bg-red-600 text-white"
              icons={faTrash}
            ></AppButton>
          </div>
        )}

        {cartState.length === 0 ? (
          <img
            className="w-full md:w-2/4"
            src="https://www.combojumbo.in/empty-cart-png.png"
            alt=""
          ></img>
        ) : (
          <Table updateSumBill={updateSumBill} />
        )}
        {cartState.length !== 0 && (
          <>
            <div className="flex items-end justify-center p-2">
              <span className=" text-b10 font-bold mr-1 leading-6 md:text-b8">
                Tổng tiền:
              </span>
              <span className="text-brown text-b6">
                {FormatterService.format(sumBill)}
              </span>
            </div>
            <AppButton
              icons={faCreditCard}
              text="Thanh toán"
              onClick={payHandler}
              className="text-white"
            />
          </>
        )}
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
    <NotAuthen />
  );
}

export default CartPage;
