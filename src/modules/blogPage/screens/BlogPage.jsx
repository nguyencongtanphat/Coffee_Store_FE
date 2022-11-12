import React from 'react'
import BlogCard from '../components/BlogCard'
import PageTitle from '../../../globalComponents/PageTitle'
import BlogData from "../components/Data"
import image20 from "../../../assests/images/blogPage/image20.png"
import leafBgR from "../../../assests/images/global/leaf-bg-right.png"
import leafBgL from "../../../assests/images/global/leaf-bg-left.png"

export default function BlogPage(props){
    return (
        <div>
            <div className=' px-[30px] lg:px-[50px] xl:px-[30px] 3xl:px-[70px]'>
                <PageTitle title={props.title} />
                <div className='hidden lg:flex lg:flex-wrap xl:flex-nowrap px-[28px] 2xl:px-[82px] 3xl:px-0 my-[70px] lg:mb-[10px] 3xl:mb-[50px]'>
                    <div className='basis-1/3 lg:basis-full xl:basis-1/2'>
                        <img src={image20} className="lg:w-[850px] xl:w-[525px] 1.5xl:w-[700px] 3xl:w-[850px] block mx-auto 3xl:ml-[42px]" />
                    </div>
                    <div className='basis-2/3 ml-[70px] xl:ml-[15px] 2xl:ml-[45px] lg:basis-full xl:basis-1/2 3xl:px-[20px] mr-[70px] xl:mr-[10px]'>
                        <p className="text-grey100 py-3 ">30/09/2022</p>
                        <p className="text-b5 text-orange pt-1.5 pb-3 3xl:pt-3 3xl:pb-5 uppercase">Cách nhận biết hương vị cà phê ngon</p>
                        <p className="text-b11 text-grey100 leading-10 xl:leading-8 2xl:leading-10 " >Một chút thời gian còn lại của những ngày cuối năm, bạn muốn dành cho những người quan trọng mà mình yêu quý, cùng họ chuyện trò và sẻ chia. Hay vào những ngày đầu năm, bạn muốn gặp họ đầu tiên, để chúc cho những người bạn thương mến ngập tràn điều tốt đẹp nhất. Thế nhưng, bạn chưa tìm được một điểm hẹn lý tưởng, tiện cho cả bạn và tiện cho cả đối phương. Là nơi bạn có thể nói tất cả mọi thứ, là nơi bạn có thể thả mình, không phải lo nghĩ, là nơi để bạn thực sự tự do để thư giãn... Nếu vậy, mời bạn ghé Nhà nhé! </p>
                        <p className="text-b11 text-grey100 leading-10 xl:leading-8 2xl:leading-10"> Với 146 cửa hàng phủ sóng trên khắp cả nước, dù bạn ở đâu, bạn cũng có thể tìm cho mình một không gian hẹn hò trên cả tuyệt vời. Từ miền Bắc vào miền Nam...</p>
                    </div>
                </div>
                <div className='flex flex-wrap mb-[50px]'>
                    {
                        BlogData.map((item, index) => {
                            return (
                                <div className='basis-full lg:basis-1/2 xl:basis-1/3' >
                                        <BlogCard image={item.image} date={item.date} title={item.title} content={item.content} key={item.id}/>
                                </div>
                                
                            )
                        })
                    }
                </div>    


                <img
                src={leafBgR}
                alt=""
                className="fixed hidden sm:top-0 md:top-[70px] right-0 -z-10 sm:block sm:w-[450px] md:w-[300px] lg:w-[400px] 2xl:w-[700px]"
                />
                <img
                src={leafBgL}
                alt=""
                className="fixed hidden top-[10px] md:top-[100px] left-0 -z-10 sm:block sm:w-[450px] md:w-[300px] lg:w-[350px] 2xl:w-[700px]"
                />
            </div>
            
        </div>
    )
}

