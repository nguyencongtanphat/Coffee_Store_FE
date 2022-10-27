import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../../assests/images/global/logo.png'
import { faBagShopping, faBars, faClose, faUser } from '@fortawesome/free-solid-svg-icons';
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { useLocation } from 'react-router';

const NavigationBar = () => {
    const [isOpenDrawer, setOpenDrawer] = useState(false);
    const [pathname, setPathname] = useState('/')
    const toggleDrawer = (open) => (event) => {
        setOpenDrawer(open)
    }

    useEffect(() => {
        setPathname(window.location.pathname);
    }, [window.location])

    console.log(pathname);

    const navItems = () => (
        <div className="flex flex-col aligns-start justify-center">
            <button className="border-none outline-none bg-transparent cursor-pointer px-4 my-2 w-8 h-8"
                onClick={toggleDrawer(false)}
            >
                <FontAwesomeIcon icon={faClose} size="2x"
                    className="text-grey100"
                />
            </button>
            <a className={`no-underline text-b8 p-4 font-semibold 
                ${(pathname === '/') ? 'text-orange' : 'text-black'}`}
                href="/"
                style={{ borderBottom: '2px solid grey', borderTop: '2px solid grey', }}
            >Trang chủ</a>
            <a className={`no-underline text-b8 p-4 font-semibold 
                ${(pathname === '/coffees') ? 'text-orange' : 'text-black'}`}
                href="/coffees"
                style={{ borderBottom: '2px solid grey' }}

            >Cà phê</a>
            <a className={`no-underline text-b8 p-4 font-semibold 
                ${(pathname === '/teas') ? 'text-orange' : 'text-black'}`}
                href="/teas"
                style={{ borderBottom: '2px solid grey' }}

            >Trà</a>
            <a className={`no-underline text-b8 p-4 font-semibold 
                ${(pathname === '/cakes') ? 'text-orange' : 'text-black'}`}
                href="/cakes"
                style={{ borderBottom: '2px solid grey' }}

            >Bánh ngọt</a>
            <a className={`no-underline text-b8 p-4 font-semibold 
                ${(pathname === '/blogs') ? 'text-orange' : 'text-black'}`}
                href="/blogs"
                style={{ borderBottom: '2px solid grey' }}

            >Chuyện nhà</a>
        </div>
    )

    return (
        <div className="flex w-screen justify-between">
            <button className="border-none outline-none bg-transparent cursor-pointer ml-2 lg:hidden"
                onClick={toggleDrawer(true)}
            >
                <FontAwesomeIcon icon={faBars} size="2xl"
                    className="text-grey100"

                />
            </button>
            <div className="lg:hidden">
                <Drawer
                    open={isOpenDrawer}
                    onClose={toggleDrawer(false)}
                    direction="left"
                    style={{ width: '53.33vw' }}
                >
                    {navItems()}
                </Drawer>
            </div>
            <a href="/">
                <img src={logo} alt="logo" className="ml-6 my-4" onClick={() => { }}
                    style={{ cursor: 'pointer' }}
                />
            </a>
            <div className="hidden lg:flex aligns-center jusfify-center">
            <a className={`no-underline text-b8 p-4 hover:text-orange 
                    ${(pathname === '/coffees') ? 'text-orange' : 'text-black'}`}
                    href="/coffees"

                >Cà phê</a>
                <a className={`no-underline text-b8 p-4 hover:text-orange 
                    ${(pathname === '/teas') ? 'text-orange' : 'text-black'}`}
                    href="/teas"

                >Trà</a>
                <a className={`no-underline text-b8 p-4 hover:text-orange 
                    ${(pathname === '/cakes') ? 'text-orange' : 'text-black'}`}
                    href="/cakes"

                >Bánh ngọt</a>
                <a className={`no-underline text-b8 p-4 hover:text-orange 
                    ${(pathname === '/blogs') ? 'text-orange' : 'text-black'}`}
                    href="/blogs"

                >Chuyện nhà</a>
            </div>
            <div className="flex mt-4">
                <a className="mr-2"
                    href='account'
                >
                    <FontAwesomeIcon icon={faUser} size="xl" border
                        className="text-grey100 border-grey100 rounded-full"

                    />
                </a>
                <a className="mr-2"
                    href="cart"
                >
                    <FontAwesomeIcon icon={faBagShopping} size="xl" border
                        className="text-grey100 border-grey100 rounded-full"
                    />
                </a>
            </div>
        </div>
    )
}

export default NavigationBar
