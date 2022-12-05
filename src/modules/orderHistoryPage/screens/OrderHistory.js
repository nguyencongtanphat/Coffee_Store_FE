import React, { useEffect, useState } from 'react'
import PageTitle from '../../../globalComponents/PageTitle.jsx'
import { createAxiosInstance } from '../../../service.js'
import OrderSummary from '../components/OrderSummary.js'
import { useContext } from 'react'
import { UserContext } from '../../../store/Context'
import sad_face from '../../../assests/images/error/sad_face.png'
import AppButton from "../../../globalComponents/AppButton";
import { Link } from "react-router-dom";

const OrderHistory = () => {
    const [ordersByUser, setOrdersByUser] = useState([])
    const [appState, dispatch] = useContext(UserContext);

    const GetOrdersByUser = async () => {
        const response = await createAxiosInstance().get(
            `order/customer/${appState.id}`
        )

        setOrdersByUser(response.data.Orders.reverse());
    }

    const FormatDate = (date) => {
        const unFormattedDate = new Date(date);
        const yyyy = unFormattedDate.getFullYear();
        let mm = unFormattedDate.getMonth() + 1; // Months start at 0!
        let dd = unFormattedDate.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;

        return dd + '/' + mm + '/' + yyyy;
    }

    useEffect(() => {
        GetOrdersByUser()
    }, [])

    return (
        <div>
            <PageTitle title="LỊCH SỬ MUA HÀNG" className="my-8" />
            {
                ordersByUser.length > 0 ? (
                    <div>
                        {
                            ordersByUser.map((order,index) => <OrderSummary 
                                index={index}
                                orderInfo={order}
                                dateOrder={FormatDate(order.createdAt)}
                            />)
                        }
                    </div>
                ) : (
                    <div className="flex flex-col justify-center items-center m-10">
                        <img
                            src={sad_face}
                            alt="Sad Face"
                            className="w-60 h-60 mx-[41rem]"
                        />
                        <p className="text-center text-grey100 text-b7 lg:text-b1 mt-8 mx-auto lg:w-[58rem]"
                        >Bạn chưa có đơn hàng nào!! Hãy ủng hộ chúng tôi nhé</p>
                        <Link to="/" className="no-underline my-10">
                            <AppButton text={"Quay về trang chủ"} className="bg-brown" />
                        </Link>
                    </div>
                )
            }
        </div>
    )
}

export default OrderHistory
