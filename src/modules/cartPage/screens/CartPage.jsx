import React from 'react'
import AppButton from '../../../globalComponents/AppButton';
import PageTitle from '../../../globalComponents/PageTitle';
import Tabel from '../components/Tabel'

function CartPage() {
  const test =()=>{
    alert("jjsdnfjnsj");
  }
  return (
    <div className="flex flex-col items-center">
      <PageTitle></PageTitle>
      <h1 className="">GIỎ HÀNG</h1>
      <h2 className="text-b6 text-grey300">Các món đã chọn</h2>
      <Tabel />
      <AppButton text="Thanh toán bfa" onClick={test} />
    </div>
  );
}

export default CartPage