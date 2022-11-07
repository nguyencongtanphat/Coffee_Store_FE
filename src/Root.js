import React from 'react'
import { Outlet } from 'react-router'
import Header from './globalComponents/Header/Header'
import Footer from './globalComponents/Footer/Footer'


const Root = () => {
    
    return (
      <div>
        <Header />
        <div id="detail">
          <Outlet />
        </div>
        <Footer />
      </div>
    );
}

export default Root
