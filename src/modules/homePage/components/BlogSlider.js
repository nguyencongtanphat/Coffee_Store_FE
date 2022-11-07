import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import BlogSummary from '../../../globalComponents/BlogSummary'
import first_thumbnail from '../../../assests/images/home/blogs/first_thumbnail_blog.png'
import second_thumbnail from '../../../assests/images/home/blogs/second_thumbnail_blog.png'
import third_thumbnail from '../../../assests/images/home/blogs/third_thumbnail_blog.png'
import { Autoplay, Pagination } from 'swiper'
import "swiper/css/autoplay"
import "swiper/css/pagination";
import "swiper/css";
import './slider_style.css'

const BlogSlider = () => {
  return (
    <div className="
      bg-no-repeat bg-cover
      bg-[url('/src/assests/images/home/blogs/blogpart_background_portrait.png')]
      lg:bg-[url('/src/assests/images/home/blogs/blogpart_background.png')]
    ">
      <p className="text-b10 text-beige text-center py-4"
      >CHUYỆN NHÀ</p>
      <Swiper className="w-64 pb-8 lg:hidden"
        autoplay={{
            delay:3000,
        }}
        pagination={true}
        modules={[Autoplay,Pagination]}
      >
        <SwiperSlide>
          <BlogSummary avtSrc={first_thumbnail} updateDate="20/09/2022" title="CÁCH NHẬN BIẾT HƯƠNG VỊ CÀ PHÊ NGON"
            summaryContent="Cùng Arabica, Robusta cũng là loại cà phê nổi tiếng được sử dụng phổ biến ở Việt Nam 
            và nhiều nước khác trên thế giới. Với nhiều đặc..."
            className="mb-8 ml-5"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BlogSummary avtSrc={second_thumbnail} updateDate="09/09/2022" title='TRUNG THU ẤM ÁP VỚI “KHUẤT ĐỂ THẤY TRĂNG"'
            summaryContent='“Khuấy để thấy trăng” - trải nghiệm “ có 1 không 2” được The Coffee House 
            tung ra cho mùa trung thu năm nay, hứa hẹn làm giới trẻ...'
            className="mb-8 ml-5"

          />
        </SwiperSlide>
        <SwiperSlide>
          <BlogSummary avtSrc={third_thumbnail} updateDate="12/08/2022" title="THE UIT COFFEE - QUÁN CÁ PHÊ LÝ TƯỞNG "
            summaryContent="Một chút thời gian còn lại của những ngày cuối năm, 
            bạn muốn dành cho những người quan trọng mà mình yêu quý, cùng họ đoàn tụ bên bàn trà..."
            className="mb-8 ml-5"

          />
        </SwiperSlide>
      </Swiper>
      <div className="hidden lg:flex justify-around">
      <BlogSummary avtSrc={first_thumbnail} updateDate="20/09/2022" title="CÁCH NHẬN BIẾT HƯƠNG VỊ CÀ PHÊ NGON"
            summaryContent="Cùng Arabica, Robusta cũng là loại cà phê nổi tiếng được sử dụng phổ biến ở Việt Nam 
            và nhiều nước khác trên thế giới. Với nhiều đặc..."
            className="mb-8"
          />
          <BlogSummary avtSrc={second_thumbnail} updateDate="09/09/2022" title='TRUNG THU ẤM ÁP VỚI “KHUẤT ĐỂ THẤY TRĂNG"'
            summaryContent='“Khuấy để thấy trăng” - trải nghiệm “ có 1 không 2” được The Coffee House 
            tung ra cho mùa trung thu năm nay, hứa hẹn làm giới trẻ...'
            className="mb-8"

          />
          <BlogSummary avtSrc={third_thumbnail} updateDate="12/08/2022" title="THE UIT COFFEE - QUÁN CÁ PHÊ LÝ TƯỞNG "
            summaryContent="Một chút thời gian còn lại của những ngày cuối năm, 
            bạn muốn dành cho những người quan trọng mà mình yêu quý, cùng họ đoàn tụ bên bàn trà..."
            className="mb-8"

          />
      </div>
    </div>
  )
}

export default BlogSlider
