import React from 'react'
import { Outlet } from 'react-router'
import Header from './globalComponents/Header/Header'
import Footer from './globalComponents/Footer/Footer'
import ScrollTopButton from './globalComponents/ScrollTopButton'

const Root = () => {
    return (
        <div>
            <Header />
            <div id="detail">
                <Outlet />
            </div>
            <ScrollTopButton />
            <Footer />
        </div>
    )
}

export default Root
