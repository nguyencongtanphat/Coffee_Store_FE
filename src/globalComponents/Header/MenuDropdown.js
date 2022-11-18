import { faAddressCard, faArrowRightFromBracket, faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const MenuDropdown = (props) => {
    return (
        <div className={`${props.open ? 'flex' : 'hidden'} flex-col rounded-lg justify-center items-start w-64
            absolute top-28 right-12 opacity-90
        `}
            style={{backgroundColor: '#F4D8B2'}}
        >
            <span className="absolute right-3 -top-2.5"
                style={{
                    borderLeft: '10px solid transparent',
                    borderRight: "10px solid transparent",
                    borderBottom: '10px solid #F4D8B2'
                }}
            ></span>
            <div className="flex max-w-full flex-col ml-4">
                <div className="flex mt-4" onClick={() => props.onClose()}>
                    <FontAwesomeIcon icon={faAddressCard} size="lg" color="black"/>
                    <Link className="no-underline ml-4 text-black 
                    hover:underline underline-offset-4 decoration-2" 
                    to="account">
                        Thông tin cá nhân
                    </Link>
                </div>
                <div className="flex my-4" onClick={() => props.onClose()}>
                    <FontAwesomeIcon icon={faClockRotateLeft} size="lg" color="black"/>
                    <Link className="no-underline ml-5 text-black 
                    hover:underline underline-offset-4 decoration-2" to="history">
                        Lịch sử mua hàng
                    </Link>
                </div>
                <div className="flex mb-4" onClick={() => props.onClose()}>
                    <FontAwesomeIcon icon={faArrowRightFromBracket} size="lg" color="black"/>
                    <Link className="no-underline ml-4 text-black 
                    hover:underline underline-offset-4 decoration-2">
                        Đăng xuất
                    </Link>
                </div>
            </div>
        </div>
    )
}



export default MenuDropdown
