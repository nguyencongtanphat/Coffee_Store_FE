import React, { useState }  from "react";
import AppButton from "../../../globalComponents/AppButton";
import InputField from "../../orderConfirm/components/InputField";
import bgCoffee from "../../../assests/images/login/bg-coffee.png";

function SigninPopup(){
    const [popup,setPop]=useState(false)
    const handleClickOpen=()=>{
        setPop(!popup)
    }
    const closePopup=()=>{
        setPop(false)
    }
    return(

        <div>
        <div className="w-full h-screen absolute top-0 bg-black bg-opacity-75 flex justify-center items-center">
            <div className="flex flex-col justify-center items-center md:flex-row">
                <div className="flex justify-center items-center">
                    <div className="w-[294px] h-[310px] rounded-t-2xl md:w-[382px] md:h-[505px] md:relative md:rounded-none md:rounded-l-2xl bg-beige100 flex justify-center items-center order-1 md:order-2">
                    <div className="">
                            <div className="">
                                <p className="mt-5 text-orange text-b7 text-center md:text-b5 md:text-start md:mt-[70px]">Đăng ký</p>
                            </div>
                            <div className="">
                                <input className="w-[198px] h-[32px] mt-[18px] p-0 pl-[11px] text-[11px] 
                                bg-transparent rounded-md border border-double border-gray outline-none 
                                md:w-[328px] md:h-[48px] md:text-b13 md:mt-[27px]" type="tel" placeholder="Nhập số điện thoại"/>
                            </div>
                            <div className=""> 
                                <input className="w-[198px] h-[32px] mt-[7px] p-0 pl-[11px] text-[11px] 
                                bg-transparent rounded-md border border-double border-gray outline-none 
                                md:w-[328px] md:h-[48px] md:text-b13" type="text" placeholder="Nhập họ tên"/>
                            </div>
                            <div className=""> 
                                <input className="w-[198px] h-[32px] mt-[7px] p-0 pl-[11px] text-[11px] 
                                bg-transparent rounded-md border border-double border-gray outline-none 
                                md:w-[328px] md:h-[48px] md:text-b13" type="password" placeholder="Nhập mật khẩu"/>
                            </div>
                            <div className=""> 
                                <input className="w-[198px] h-[32px] mt-[7px] p-0 pl-[11px] text-[11px] 
                                bg-transparent rounded-md border border-double border-gray outline-none 
                                md:w-[328px] md:h-[48px] md:text-b13" type="password" placeholder="Nhập lại mật khẩu"/>
                            </div>
                            <div className=""> 
                                <AppButton className="w-full h-[32px] mt-[18px] text-b17 flex items-center rounded-md md:w-[342px] md:h-[53px] md:mt-[32px] md:text-b10" text="Đăng ký"  />
                            </div>
                            <div className="md:flex md:justify-end md:bottom-3">
                                <p className="mt-[8px] text-orange text-[11px] text-center md:mt-[30px]">Đăng nhập</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center item-center">
                    <img
                        src={bgCoffee}
                        alt=""
                        className="w-[294px] h-[174px] object-cover rounded-b-2xl md:w-full md:h-auto md:rounded-none md:rounded-r-2xl"
                    />
                </div>
            </div>
        </div> 
        </div>

    );
}
export default SigninPopup;