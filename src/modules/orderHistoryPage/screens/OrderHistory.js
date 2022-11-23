import React, { useEffect, useState } from 'react'
import PageTitle from '../../../globalComponents/PageTitle.jsx'
import { createAxiosInstance } from '../../../service.js'
import OrderSummary from '../components/OrderSummary.js'
import { useContext } from 'react'
import { UserContext } from '../../../store/Context'

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
            {ordersByUser.length > 0 && <div className="m-4 lg:mx-96 lg:w-2/3">
                {
                    ordersByUser.map((order, index) => <OrderSummary
                        index={index}
                        orderInfo={order}
                        dateOrder={FormatDate(order.createdAt)}
                    />)
                }
            </div>}
        </div>
    )
}

export default OrderHistory
