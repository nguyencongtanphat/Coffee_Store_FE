import { faArrowDownWideShort, faArrowUpShortWide, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

const SortDropdown = () => {

    const [isDropdownOpen, setDropdownOpen] = useState(false)
    const [selectedValue, setSelectedValue] = useState(<div className="flex" id="selected">
        <FontAwesomeIcon icon={faArrowDownWideShort} size="xl" color="orange" className="mt-3" />
        <p className="ml-2 mt-4 text-grey200"
        >Giá giảm dần</p>
    </div>)
    const [choosenElement,setChoosenElement] = useState()

    return (
        <div className={`flex flex-col bg-grey ${isDropdownOpen ? 'rounded-t-xl' : 'rounded-xl'} w-72 h-12 cursor-pointer`} >
            <div className="flex pl-3" onClick={() => {
                setDropdownOpen(!isDropdownOpen)
                setChoosenElement(document.getElementById("selected"))
            }}>
                    {selectedValue}
                {
                    isDropdownOpen
                        ? <FontAwesomeIcon icon={faSortUp} size="2x" color="orange" className="ml-24 mt-4" />
                        : <FontAwesomeIcon icon={faSortDown} size="2x" color="orange" className="ml-24 mt-1" />
                }
            </div>
            {
                isDropdownOpen && (
                    <div className="z-10 bg-grey rounded-b-xl">
                        <div className="flex pl-3 hover:bg-grey300" onClick={(e) => {
                            choosenElement.innerHTML = e.currentTarget.innerHTML
                            setDropdownOpen(!isDropdownOpen)
                        }}>
                            <FontAwesomeIcon icon={faArrowDownWideShort} size="xl" color="orange" className="mt-3" />
                            <p className="ml-2 my-4 text-grey200"
                            >Giá giảm dần</p>
                        </div>
                        <div className="flex pl-3 hover:bg-grey300" onClick={(e) => {
                            choosenElement.innerHTML = e.currentTarget.innerHTML
                            setDropdownOpen(!isDropdownOpen)
                        }}>
                            <FontAwesomeIcon icon={faArrowUpShortWide} size="xl" color="orange" className="mt-3" />
                            <p className="ml-2 my-4 text-grey200"
                            >Giá tăng dần</p>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default SortDropdown
