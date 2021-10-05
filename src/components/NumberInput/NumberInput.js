import React from 'react';
import PropTypes from 'prop-types';

function NumberInput({ name, placeholder, onChange, className, min, max }) {
    return (
        <input
            className={`${className} dynamic-form-number`}
            type="number"
            placeholder={placeholder}
            onChange={onChange}
            name={name}
            min={min || 0}
            max={max}
            data-testid="form-input-number"
        />
    );
}

NumberInput.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    className: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};


export default NumberInput;
