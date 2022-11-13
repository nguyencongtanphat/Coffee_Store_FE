import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'
import InfoContactBar from './InfoContactBar'
const Header = () => {
    const [visible,setVisible] = useState(true)
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos < currentScrollPos) {
            setVisible(false)
        } 
        prevScrollpos = currentScrollPos;
    }
    return (
        <div className={`bg-white sticky z-10 ${visible ? 'top-0' : '-top-10'}`}
            style={{
                transition: 'top 0.3s'
            }}
        >
            <InfoContactBar/>
            <NavigationBar />
        </div>
    )
}

export default Header
