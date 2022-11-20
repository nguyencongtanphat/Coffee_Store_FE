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
import DetailPage from './modules/DetailPage/screens/DetailPage';
import LoginPopup from './modules/loginPopup/screen/loginPopup';
import SigninPopup from './modules/signinPopup/screen/signinPopup';
import Provider from './store/Provider';
import PersonalInfoPage from './modules/personalInfoPage/screens/PersonalInfoPage';
import BlogPage from './modules/blogPage/screens/BlogPage';


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
        path: "products/:id",
        element: <DetailPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "coffees",
        element: <CategoryPage title="CÀ PHÊ" type="3"/>,
        errorElement: <ErrorPage />,
      },

      {
        path: "teas",
        element: <CategoryPage title="TRÀ" type="1"/>,
        errorElement: <ErrorPage />,
      },
      {
        path: "cakes",
        element: <CategoryPage title="BÁNH NGỌT" type="2"/>,
        errorElement: <ErrorPage />,
      },
      {
        path: "blogs",
        element: <BlogPage title="CHUYỆN NHÀ" />,
        errorElement: <ErrorPage />,
      },
      {
        path: "account",
        element: <PersonalInfoPage />,
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

