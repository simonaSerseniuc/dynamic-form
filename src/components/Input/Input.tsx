import React from 'react';
import PropTypes from 'prop-types';

type Props = {
  onChange: (e: React.FormEvent<HTMLInputElement>) => void,
  name: string,
  placeholder: string,
  className: string,
};

function Input({ name, placeholder, onChange, className }: Props) {
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

export default Input;
