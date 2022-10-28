import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import "swiper/css";
import "swiper/css/autoplay"
import { Autoplay } from 'swiper';

const InfoContactBar = () => {

    return (
        <div>
            <Swiper 
                autoplay={{
                    delay: 3000,
                }}
                modules={[Autoplay]}
                className="lg:hidden"
            >
                <SwiperSlide>
                    <div className="flex items-center justify-center mt-2">
                        <FontAwesomeIcon icon={faLocationDot} color="orange" />
                        <p className="ml-2 text-lg">Hàn Thuyên, Thủ Đức, TP. HCM</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex items-center justify-center mt-2">
                        <FontAwesomeIcon icon={faPhone} color="orange" />
                        <p className="ml-2 text-lg">083 913 2695</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex items-center justify-center mt-2">
                        <FontAwesomeIcon icon={faTruckFast} color="orange" />
                        <p className="ml-2 text-lg">Freeship từ 100.000đ</p>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="pt-2 hidden lg:flex lg:items-center lg:justify-evenly">
                <div className="flex items-center justify-center mt-2">
                    <FontAwesomeIcon icon={faLocationDot} color="orange" />
                    <p 
                        className="ml-2 hover:text-orange hover:cursor-pointer"
                    >Hàn Thuyên, Thủ Đức, TP. HCM</p>
                </div>
                <div className="flex items-center justify-center mt-2">
                    <FontAwesomeIcon icon={faPhone} color="orange" />
                    <p 
                        className="ml-2 hover:text-orange hover:cursor-pointer"
                    >083 913 2695</p>
                </div>
                <div className="flex items-center justify-center mt-2">
                    <FontAwesomeIcon icon={faTruckFast} color="orange" />
                    <p 
                        className="ml-2 hover:text-orange hover:cursor-pointer"
                    >Freeship từ 100.000đ</p>
                </div>
            </div>
        </div>
    )
}

export default InfoContactBar