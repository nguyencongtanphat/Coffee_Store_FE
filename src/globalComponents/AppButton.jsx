import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

function AppButton({ icon, text, onClick, className }) {
  
  return (
    <button
      className={`flex bg-orange border-none px-4 justify-center
                py-3 gap-3 rounded-xl
                md:py-5 md:px-8 ${className} `}
      onClick={onClick}
    >
      <div className="text-white text-12 
                      md:text-b10 lg:text-b9 "> {text}</div>
    </button>
  );
}

AppButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className:PropTypes.string,
  icon: PropTypes.any,
};

AppButton.defaultProps = {
  text: "default text",
};

export default AppButton;
