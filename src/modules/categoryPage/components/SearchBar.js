import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const SearchBar = () => {
    return (
        <div className="flex bg-grey rounded-xl border-none w-72 h-12">
            <input className="bg-grey rounded-xl border-none w-72 h-11 text-b11 ml-4 text-grey100 focus:outline-none"
                type="text"
                placeholder="Search by name..."
            />
            <button className="border-none bg-grey rounded-tr-xl rounded-br-xl cursor-pointer hover:bg-grey300">
                <FontAwesomeIcon icon={faSearch} size="xl" color="orange"
                    className="mx-4 my-3"
                />
            </button>
        </div>
    )
}

export default SearchBar
