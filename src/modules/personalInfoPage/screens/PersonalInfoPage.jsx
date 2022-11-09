import React from 'react';
import AppButton from '../../../globalComponents/AppButton';
import PageTitle from '../../../globalComponents/PageTitle';
import InputField from '../../orderConfirm/components/InputField'
import leafBgR from "../../../assests/images/global/leaf-bg-right.png"
import leafBgL from "../../../assests/images/global/leaf-bg-left.png";

export default function PersonalInfoPage() {
  return (
    <div>
        <div className='p-2 mx-10 md:mx-80'>
            <PageTitle title="THÔNG TIN CÁ NHÂN"/>
            <InputField type="text" label="Họ tên" holder="Nguyễn Thành Trung" className='mt-5'/>
            <InputField type="tel" label="Số điện thoại" holder="0839132695"/>
            <InputField type="text" label="Địa chỉ" holder="213 Cách mạng tháng Tám, Biên Hoà - Đồng Nai"/>
            <div className='flex flex-col items-center'>
                <AppButton text="Sửa thông tin" className="w-[60%] mt-4"/>
                <button className={`flex bg-[#FAFAFA] px-4 justify-center
                        py-3 gap-3 rounded-xl
                        md:py-5 md:px-8 border-1 border-solid border-orange w-[60%] mb-10 mt-5`}>
                    <div className="text-orange text-b12 
                            md:text-b10 lg:text-b9">Đổi mật khẩu</div>
                </button>
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
            className="absolute hidden top-0  -z-10 md:block md:w-[300px] lg:w-[400px] "
        />
    </div>
  )
}
