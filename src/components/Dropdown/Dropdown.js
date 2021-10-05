import React from 'react';
import PropTypes from 'prop-types';
import './Dropdown.css';

function Dropdown({ name, placeholder, onChange, className, options }) {
    return (
        <select
            className={`${className} dynamic-form-dropdown`}
            placeholder={placeholder}
            onChange={onChange}
            name={name}
        >
            <option value={null} key='placeholder'>
                {placeholder}
            </option>
            {
                options.map(option => {
                    return (
                        <option value={option} key={option}>
                            {option}
                        </option>
                    )
                })
            }
        </select>
    );
}

Dropdown.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    className: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};


export default Dropdown;
