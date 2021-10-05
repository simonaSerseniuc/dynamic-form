import React from 'react';
import PropTypes from 'prop-types';

function Input({ name, placeholder, onChange, className }) {
    return (
        <input
            className={`${className} dynamic-form-input`}
            type="text"
            placeholder={placeholder}
            onChange={onChange}
            name={name}
        />
    );
}

Input.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    className: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};


export default Input;
