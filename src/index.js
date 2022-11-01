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
import Header from './globalComponents/Header/Header';
import ChitietPage from './modules/chitietPage/screens/ChitietPage';

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
        path: "coffees",
        element: <ChitietPage />,
      },
      {
        path: "teas",
        errorElement: <ErrorPage />,
      },
      {
        path: "cakes",
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
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChitietPage/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

