import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import "./index.css";
import './assests/fonts/Lexend/Lexend-VariableFont_wght.ttf'
import './assests/fonts/Ms_Madi/MsMadi-Regular.ttf'
import './tailwind.css'
import CartPage from './modules/cartPage/screens/CartPage';
import HomePage from './modules/homePage/screens/HomePage';
import ErrorPage from './modules/errorPage/screens/ErrorPage';
import Root from './Root'
import ConfirmPage from './modules/orderConfirm/screens/ConfirmPage';
import CategoryPage from './modules/categoryPage/screens/CategoryPage';
import Header from './globalComponents/Header/Header';
import DetailPage from './modules/DetailPage/screens/DetailPage';
import LoginPopup from './modules/loginPopup/screen/loginPopup';
import SigninPopup from './modules/signinPopup/screen/signinPopup';
import Provider from './store/Provider';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "coffees/:id",
        element: <DetailPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "coffees",
        element: <CategoryPage title="CÀ PHÊ" />,
        errorElement: <ErrorPage />,
      },

      {
        path: "teas",
        element: <CategoryPage title="TRÀ" />,
        errorElement: <ErrorPage />,
      },
      {
        path: "cakes",
        element: <CategoryPage title="BÁNH NGỌT" />,
        errorElement: <ErrorPage />,
      },
      {
        path: "blogs",
        errorElement: <ErrorPage />,
      },
      {
        path: "account",
        errorElement: <ErrorPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "/confirm",
        element: <ConfirmPage />,
      },
      {
        path: "/login",
        element: <LoginPopup />,
      },
      {
        path: "/signup",
        element: <SigninPopup />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider>
    <RouterProvider router={router} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals 

