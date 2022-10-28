import React from 'react'
import InputField from './InputField'

export default function CustomerInfo() {
  return (
    <div className='m-4 rounded-xl p-5 pb-1.5'>
      <h1 className='text-orange text-b10 align-middle text-center mb-2 md:mb-10 md:text-b5'>Thông tin nhận hàng</h1>
      <InputField type="text" holder="Nguyễn Văn A" label="Họ và tên người nhận"/>
      <InputField type="tel" holder="083 913 2692" label="Số điện thoại người nhận"/>
      <InputField type="text" holder="12 Hoàng Diệu, Thủ Đức, TP.HCM" label="Địa chỉ nhận hàng"/>
    </div>
  )
}
