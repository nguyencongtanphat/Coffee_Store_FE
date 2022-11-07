import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper'
import "swiper/css/autoplay"
import "swiper/css/pagination";
import "swiper/css";
import './slider_style.css'

const Banner = () => {
    return (
        <div className="w-full h-64 bg-orange lg:h-96">
            <Swiper
                pagination={true}
                autoplay={{
                    delay: 3000,
                }}
                modules={[Autoplay, Pagination]}
            >
                <SwiperSlide>

                </SwiperSlide>
                <SwiperSlide>

                </SwiperSlide>
                <SwiperSlide>

                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Banner
