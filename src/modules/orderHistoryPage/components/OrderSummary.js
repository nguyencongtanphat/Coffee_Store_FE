import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { FormatterService } from '../../../service'
import OrderItemSummary from './OrderItemSummary'
import sample from './Rectangle 4065.png'
const OrderSummary = (props) => {
    return (
        <div className="pb-4 mb-4 lg:pb-8 lg:mb-8 lg:w-2/3 lg:flex"
            style={{borderBottom: '1px solid #E0E0E0'}}
        >
            <div className="flex lg:flex-col">
                <p className="text-b5 md:text-b3 text-orange">#0{props.index + 1}</p>
                <p className="text-b11 md:text-b9 text-orange flex my-2 mx-4 lg:mx-0">
                    <p className="text-black mr-2">Ngày:</p> {props.dateOrder}
                </p>
                <p className="text-b11 md:text-b9 text-orange flex my-2">
                    <p className="text-black mr-2">Tổng tiền:</p> {FormatterService.format(props.orderInfo.TotalAmount)}
                </p>
            </div>
            <div className="flex ml-16">
                <img src={sample} className="lg:w-28 lg:h-28"/>
                <div className="ml-4">
                    {
                        props.orderInfo.DetailOrder.map(orderProduct => <OrderItemSummary 
                            name={orderProduct.Item.Name}
                            quantity={orderProduct.Quantity}
                        />)
                    }
                    <Link className="text-b13 md:text-b9 text-orange">
                        Xem thêm
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default OrderSummary
