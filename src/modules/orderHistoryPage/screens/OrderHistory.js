import React, { useEffect, useState } from 'react'
import PageTitle from '../../../globalComponents/PageTitle.jsx'
import { createAxiosInstance } from '../../../service.js'
import OrderSummary from '../components/OrderSummary.js'
import { useContext } from 'react'
import { UserContext } from '../../../store/Context'

const OrderHistory = () => {
    const [ordersByUser, setOrdersByUser] = useState([])
    const [appState, dispatch] = useContext(UserContext);

    // useEffect(async () => {
    //     const response = await createAxiosInstance().get(`order/customer/${appState.id}`)
    //     setOrdersByUser(response.data.Orders)
    // }, [])

    return (
        <div>
            <PageTitle title="LỊCH SỬ MUA HÀNG" className="my-8" />
            {ordersByUser.length > 0 && <div className="m-4">
                {
                    ordersByUser.map(order => <OrderSummary
                        orderInfo={order}
                    />)
                }

            </div>}
            <div className="m-4 lg:mx-96 lg:w-2/3">
                <OrderSummary />
                <OrderSummary />
                <OrderSummary />
            </div>
        </div>
    )
}

export default OrderHistory
