import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assests/images/global/logo.png";
import {
  faBagShopping,
  faBars,
  faClose,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../store/Context";
import LoginPopup from "../../modules/loginPopup/screen/loginPopup";
import SigninPopup from "../../modules/signinPopup/screen/signinPopup";
import AppButton from "../AppButton";



const NavigationBar = () => {
  const [appState, dispatch] = useContext(UserContext);
  console.log("app state:", appState);

  const location = useLocation();
  const [isOpenDrawer, setOpenDrawer] = useState(false);
  const [pathname, setPathname] = useState("/");
  const toggleDrawer = (open) => (event) => {
    setOpenDrawer(open);
  };

  useEffect(() => {
    setPathname(location.pathname);
  }, [location]);


  const navItems = () => (
    <div className="flex flex-col aligns-start justify-center">
      <button
        className="border-none outline-none bg-transparent cursor-pointer px-4 my-2 w-8 h-8"
        onClick={toggleDrawer(false)}
      >
        <FontAwesomeIcon icon={faClose} size="2x" className="text-grey100" />
      </button>
      <Link
        className={`no-underline text-b8 p-4 font-semibold 
                ${pathname === "/" ? "text-orange" : "text-black"}`}
        to="/"
        onClick={toggleDrawer(false)}
        style={{ borderBottom: "2px solid grey", borderTop: "2px solid grey" }}
      >
        Trang chủ
      </Link>
      <Link
        className={`no-underline text-b8 p-4 font-semibold 
                ${pathname === "/coffees" ? "text-orange" : "text-black"}`}
        to="/coffees"
        style={{ borderBottom: "2px solid grey" }}
        onClick={toggleDrawer(false)}
      >
        Cà phê
      </Link>
      <Link
        className={`no-underline text-b8 p-4 font-semibold 
                ${pathname === "/teas" ? "text-orange" : "text-black"}`}
        to="/teas"
        style={{ borderBottom: "2px solid grey" }}
        onClick={toggleDrawer(false)}
      >
        Trà
      </Link>
      <Link
        className={`no-underline text-b8 p-4 font-semibold 
                ${pathname === "/cakes" ? "text-orange" : "text-black"}`}
        to="/cakes"
        style={{ borderBottom: "2px solid grey" }}
        onClick={toggleDrawer(false)}
      >
        Bánh ngọt
      </Link>
      <Link
        className={`no-underline text-b8 p-4 font-semibold 
                ${pathname === "/blogs" ? "text-orange" : "text-black"}`}
        to="/blogs"
        style={{ borderBottom: "2px solid grey" }}
        onClick={toggleDrawer(false)}
      >
        Chuyện nhà
      </Link>
    </div>
  );

  const [isOpenLoginPopup, setIsOpenLoginPopup] = useState(false);
  const [isOpenSignupPopup, setIsOpenSignupPopup] = useState(false);

  const togglePopupLogin = () => {
    setIsOpenLoginPopup((prev) => !prev);
  };

  const togglePopupSignup = () => {
    setIsOpenSignupPopup((prev) => !prev);
  };


 
  return (
    <>
      <LoginPopup
        className={`${isOpenLoginPopup ? "block" : "hidden"}`}
        togglePopupLogin={togglePopupLogin}
      ></LoginPopup>
      <SigninPopup
        className={`${isOpenSignupPopup ? "block" : "hidden"}`}
        togglePopupSignup={togglePopupSignup}
        togglePopupLogin={togglePopupLogin}
      ></SigninPopup>
      <div className="flex items-center justify-between">
        <button
          className="border-none outline-none bg-transparent cursor-pointer ml-2 mt-4 lg:hidden"
          onClick={toggleDrawer(true)}
        >
          <FontAwesomeIcon icon={faBars} size="2xl" className="text-grey100" />
        </button>
        <div className="lg:hidden">
          <Drawer
            open={isOpenDrawer}
            onClose={toggleDrawer(false)}
            direction="left"
            style={{ width: "53.33vw" }}
          >
            {navItems()}
          </Drawer>
        </div>
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="ml-6 w-32 mt-1"
            onClick={() => {}}
            style={{ cursor: "pointer" }}
          />
        </Link>
        <nav className="hidden lg:flex aligns-center jusfify-center">
          <Link
            className={`no-underline text-b8 p-4 pt-6 hover:text-orange 
                    ${pathname === "/coffees" ? "text-orange" : "text-black"}`}
            to="/coffees"
          >
            Cà phê
          </Link>
          <Link className={`no-underline text-b8 p-4 pt-6 hover:text-orange 
                    ${(pathname === '/teas') ? 'text-orange' : 'text-black'}`}
                    to="/teas"

                >Trà</Link>
          <Link
            className={`no-underline text-b8 p-4 pt-6 hover:text-orange 
                    ${pathname === "/cakes" ? "text-orange" : "text-black"}`}
            to="/cakes"
          >
            Bánh ngọt
          </Link>
          <Link
            className={`no-underline text-b8 p-4 pt-6 hover:text-orange 
                    ${pathname === "/blogs" ? "text-orange" : "text-black"}`}
            to="/blogs"
          >
            Chuyện nhà
          </Link>
        </nav>

        {/* login signup btn */}
        <div className={` mt-4 ${!appState.isLogin ? "flex" : "hidden"}`}>
          <AppButton
            text="Đăng nhập"
            className="mr-2 mb-2"
            onClick={togglePopupLogin}
          ></AppButton>
          <AppButton
            onClick={togglePopupSignup}
            text="Đăng kí"
            className="mr-2 mb-2"
          ></AppButton>
        </div>
        {/* user Info show when logined */}
        <div className={` mt-4 ${appState.isLogin ? "flex" : "hidden"}`}>
          <Link className="mr-2" to="account">
            <FontAwesomeIcon
              icon={faUser}
              size="xl"
              border
              className="text-grey100 border-grey100 rounded-full"
            />
          </Link>
          <Link className="mr-2" to="cart">
            <FontAwesomeIcon
              icon={faBagShopping}
              size="xl"
              border
              className="text-grey100 border-grey100 rounded-full"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
