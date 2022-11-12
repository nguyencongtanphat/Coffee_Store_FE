import React,{useState} from 'react'
import NavigationBar from './NavigationBar'
import InfoContactBar from './InfoContactBar'
const Header = () => {
    const [visible, setVisible] = useState(true)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 150) {
            setVisible(false)
        }
        else if (scrolled <= 150) {
            setVisible(true)
        }
    };
    window.addEventListener('scroll', toggleVisible);

    return (
        <div className="bg-white sticky top-0 z-10 "
        >
            {visible && <InfoContactBar />}
            <NavigationBar className={`${!visible && 'shadow-md shadow-grey'}`} />
        </div>
    )
}

export default Header
