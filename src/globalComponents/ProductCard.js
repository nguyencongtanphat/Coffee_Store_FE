import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import PropTypes from 'prop-types';
import { FormatterService } from "../service";
import styles from "./ProductCard.module.css"

const ProductCard = (props) => {
    return (
      <div
        className={`lg:w-[17rem] lg:max-h-[22rem] overflow-hidden
                w-[9.5rem] rounded-2xl m-4 bg-white transition-shadow shadow-lg shadow-grey300 hover:bg-gray-100 
                ${props.className}`}
      >
        <div className="">
          <img
            src={props.avtSrc}
            alt="This is a product avatar"
            className={`${styles.productImg} w-[8.5rem] my-4 mx-2 max-h-28
                    lg:m-4 lg:max-h-48 lg:max-w-60 lg:w-60 rounded-2xl`}
          />
        </div>

        <div className="p-2 lg:p-4">
          <p className="text-b11 lg:text-b8 text-grey200 h-11">{props.name}</p>
          <p className="text-b11 lg:text-b9 text-grey300">{props.category}</p>
          <div className="flex justify-between mt-1">
            <p className="text-orange text-b9 pt-1 lg:text-b7">
              {FormatterService.format(props.price)}
            </p>
            <button className="border-none bg-transparent cursor-pointer ">
              <FontAwesomeIcon icon={faPlusCircle} color="orange" size="2x" />
            </button>
          </div>
        </div>
      </div>
    );
}

ProductCard.propTypes = {
    avtSrc: PropTypes.string.isRequired,
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}

ProductCard.defaultProps = {
    avtSrc: 'Error product',
    name: 'Error product name',
    category: 'Error product category',
    price: 0,
}

export default ProductCard