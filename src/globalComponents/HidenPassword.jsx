import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEye, faEyeSlash
  } from "@fortawesome/free-solid-svg-icons";
import React, {useState} from 'react'

const HidenPassword = () => {
    const [visible, setVisibility] = useState(false);

    const Icon = <FontAwesomeIcon icon = {visible ? faEyeSlash : faEye} onClick={() => setVisibility(visibility => !visibility )}/>;

    const InputType = visible ? "text" : "password";

    return(
        <div className="">
                  <input
                    className="w-[198px] h-[32px] mt-[7px] p-0 pl-[11px] text-[11px] 
                                bg-transparent rounded-md border border-solid border-gray outline-none 
                                md:w-[328px] md:h-[48px] md:text-b13"
                    type={InputType}
                    placeholder="Nhập mật khẩu"
                  >
                    <FontAwesomeIcon icon={Icon}/>
                  </input>
                </div>
    )
};

export default HidenPassword;