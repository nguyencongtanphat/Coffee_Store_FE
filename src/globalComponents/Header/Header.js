import React from 'react'
import NavigationBar from './NavigationBar'
import InfoContactBar from './InfoContactBar'
const Header = () => {
    return (
        <div className="bg-white sticky top-0"
            style={{borderBottom: '1px solid black'}}
        >
            <InfoContactBar />
            <NavigationBar />
        </div>
    )
}

export default Header
