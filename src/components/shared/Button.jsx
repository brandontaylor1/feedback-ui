import React from "react";
import PropTypes from "react";


const Button = ({ children, text, version, type, isDisabled }) => {


    return (
        <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
            {children}

        </button>
    )
}


Button.defaultProps = {
    version: "primary",
    type: 'button',
    isDisabled: false
}


Button.propTypes = {
    children: PropTypes.any,
    version: 'string',
    type: 'string',
    isDisabled: 'bool',
}

export default Button