import React from 'react';
import PropTypes from 'prop-types';

function DateInput({ name, placeholder, onChange, className }) {
    return (
        <input
            className={`${className} dynamic-form-input`}
            type="date"
            placeholder={placeholder}
            onChange={onChange}
            name={name}
        />
    );
}

DateInput.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    className: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};


export default DateInput;
