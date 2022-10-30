import React, { useEffect, useState } from 'react'
import style from './Footer.css'
import logo from '../../assests/images/global/logo.png'
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as BgFacebook } from "../../assests/images/svg/facebook_bg.svg"
import { ReactComponent as BgYoutube } from "../../assests/images/svg/youtube_bg.svg"
import { ReactComponent as BgInstagram } from "../../assests/images/svg/instagram_bg.svg"
import { ReactComponent as IconFacebook } from "../../assests/images/svg/facebook_icon.svg"
import { ReactComponent as IconYoutube } from "../../assests/images/svg/youtube_icon.svg"
import { ReactComponent as IconInstagram } from "../../assests/images/svg/instagram_icon.svg"

export default function Footer({props}) {
    const location = useLocation();
    const [pathname, setPathname] = useState('/')


    useEffect(() => {
        setPathname(location.pathname);
    }, [location])

    return (
        <div className={
            `w-screen bg-grey relative bottom-0 left-0 h-80
            ${(pathname === '/') ? 'bg-white': 'bg-grey'}`
            }>
            <div className="flex flex-row flex-wrap items-center p-2">
                <div className="basis-full h-28 "> 
                    <div className='mx-auto mt-[28px] w-min'>
                        <Link to="/">
                            <img src={logo} alt="logo" className=" w-48 sm:basic-64" onClick={() => { }}
                                style={{ cursor: 'pointer' }}
                            />
                        </Link>
                        <div className="flex flex-row  mx-auto mt-[10px] justify-between w-[132px]">
                            <Link className="basis-1/3 h-max w-max"
                            to="/">
                                <BgFacebook className="absolute"/>
                                <IconFacebook className="relative top-[7px] left-[11.25px]"/>
                            </Link>
                            <Link className="basis-1/3" 
                            to="/">
                                <BgInstagram className="absolute"/>
                                <IconInstagram className="relative top-[6.5px] left-[7.5px]"/>
                            </Link>
                            <Link className="basis-1/3"
                            to="/">
                                <BgYoutube className="absolute"/>
                                <IconYoutube className="relative top-[8.5px] left-[7.75px]"/>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="basis-5/12 h-52 mt-8"> 
                    <p className="text-b12 pl-[20px] my-[16.5px]">Giới thiệu</p>
                    <ul className="list-none pl-[20px]">
                        <li className="my-[16.5px]">
                            <Link className="no-underline text-b13 text-black" to="/coffees">
                                Cà phê
                            </Link>
                        </li>
                        <li className="my-[16.5px]">
                            <Link className="no-underline text-b13 text-black" to="/teas">
                                Trà
                            </Link>
                        </li>
                        <li className="my-[16.5px]">
                            <Link className=" no-underline text-b13 text-black" to="/cakes">
                                Bánh ngọt
                            </Link>
                        </li>
                        <li className="my-[16.5px]">
                            <Link className=" no-underline text-b13 text-black" to="/blogs">
                                Chuyện nhà
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="basis-7/12 h-52 mt-8 ">
                    <p className="text-b12 pl-[20px] my-[16.5px]">Thông tin liên hệ</p>
                        <ul className="list-none pl-[20px]">
                            <li className="my-[16.5px] text-b13">Số điện thoại <br /><span className="text-orange" >083 913 2695</span></li>
                            <li className="my-[16.5px] text-b13">Địa chỉ <br /><span className="text-orange" >Hàn Thuyên, Thủ Đức, TP HCM</span></li>
                        </ul>
                </div>
            </div>
        </div>
    )
}