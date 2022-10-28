import React from 'react'
import { Outlet } from 'react-router'
import Header from './globalComponents/Header/Header'

const Root = () => {
    return (
        <div>
            <Header />
            <div id="detail">
                <Outlet />
            </div>
        </div>
    )
}

export default Root
