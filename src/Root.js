import React from 'react'
import { Outlet } from 'react-router'
import Header from './globalComponents/Header/Header'
import Footer from './globalComponents/Footer/Footer'
import ScrollTopButton from './globalComponents/ScrollTopButton'
import { useContext } from 'react'
import { UserContext } from './store/Context'



const Root = () => {
  const [appState, dispatch] = useContext(UserContext);

  console.log("app state: ", appState)
    
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
