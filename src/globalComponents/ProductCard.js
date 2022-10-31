import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import PropTypes from 'prop-types';
const ProductCard = (props) => {
    return (
        <div className="w-40 lg:w-64 rounded-2xl m-4 bg-white transition-shadow shadow-lg shadow-grey300 ">
            <img src={props.avtSrc} alt="This is a product avatar"
                className="w-16 lg:w-28 mx-11 lg:mx-20 my-4 lg:m-8 "
            />
            <div className="p-4">
                <p className="text-b11 lg:text-lg font-semibold text-grey200"
                >{props.name}</p>
                <p className="text-b13 lg:text-lg text-grey300"
                >{props.category}</p>
                <div className="flex justify-between mt-4">
                    <p className="text-orange"
                    >{props.price}đ</p>
                    <FontAwesomeIcon icon={faPlusCircle} color="orange" size="lg"/>
                </div>
            </div>
        </div>
    )
}

ProductCard.propTypes= {
    avtSrc: PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    category:PropTypes.string.isRequired,
    price:PropTypes.number.isRequired
}

ProductCard.defaultProps = {
    avtSrc: 'Error product',
    name:'Error product name',
    category:'Error product category',
    price:0,
}

export default ProductCard
