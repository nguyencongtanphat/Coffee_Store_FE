import React, { useEffect } from 'react'
import { Outlet } from 'react-router'
import Header from './globalComponents/Header/Header'
import Footer from './globalComponents/Footer/Footer'
import ScrollTopButton from './globalComponents/ScrollTopButton'
import { useContext } from 'react'
import { CartContext, UserContext } from './store/Context'
import { createAxiosInstance } from './service'
import { fetchCartFromServer } from './store/Actions'



const Root = () => {
  const [appState, dispatch] = useContext(UserContext);
  const [cartState, cartDispatch] = useContext(CartContext);


   useEffect(() => {
     async function fetchData() {
       console.log("app call cart ");
       if (appState.isLogin) {
         const response = await createAxiosInstance().get(
           `cart/${appState.id}`
         );
         console.log("cart response:", response);
         const listCart = response.data.data;
         cartDispatch(fetchCartFromServer(listCart));
       }
     }
     fetchData();
   }, [cartDispatch, appState.isLogin, appState.id]);
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
