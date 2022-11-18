import React from 'react'
import { Link } from 'react-router-dom'
import sample from './Rectangle 4065.png'
const OrderSummary = () => {
    return (
        <div className="pb-4 mb-4 lg:pb-8 lg:mb-8 lg:w-2/3 lg:flex"
            style={{borderBottom: '1px solid #E0E0E0'}}
        >
            <div className="flex lg:flex-col">
                <p className="text-b5 md:text-b3 text-orange">#01</p>
                <p className="text-b11 md:text-b9 text-orange flex my-2 mx-4 lg:mx-0">
                    <p className="text-black mr-2">Ngày:</p> 25/10/2022
                </p>
                <p className="text-b11 md:text-b9 text-orange flex my-2">
                    <p className="text-black mr-2">Tổng tiền:</p> 159000d
                </p>
            </div>
            <div className="flex ml-16">
                <img src={sample} className="lg:w-28 lg:h-28"/>
                <div className="ml-4">
                    <div className="flex items-center w-48 lg:w-72 justify-between text-grey200">
                        <p className="text-b13 md:text-b9">
                            Cà Phê Mouse Kem Cheese
                        </p>
                        <p className="text-b13 md:text-b9">
                            x2
                        </p>

                    </div>
                    <div className="flex items-center w-48 lg:w-72 justify-between text-grey200">
                        <p className="text-b13 md:text-b9">
                            Trà Long Nhãn Hạt Sen
                        </p>
                        <p className="text-b13 md:text-b9">
                            x2
                        </p>

                    </div>
                    <div className="flex items-center w-48 lg:w-72 justify-between text-grey200 lg:mb-4">
                        <p className="text-b13 md:text-b9">
                            Cà Phê Sữa Đá
                        </p>
                        <p className="text-b13 md:text-b9">
                            x2
                        </p>

                    </div>
                    <Link className="text-b13 md:text-b9 text-orange">
                        Xem thêm
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default OrderSummary
