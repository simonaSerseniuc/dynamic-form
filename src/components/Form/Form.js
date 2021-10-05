import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input/Input.js';
import NumberInput from '../NumberInput/NumberInput.js';
import DateInput from '../DateInput/DateInput.js';
import Dropdown from '../Dropdown/Dropdown.js';
import './Form.css';

function Form({ rows, className }) {
    const [json, setJson] = useState({});

    const onChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        setJson({
            ...json,
            [name]: value,
        });

    }

    const validation = () => {
        let valid = true;

        if (Object.keys(rows).length !== Object.keys(json).length) return false;

        Object.keys(json).map(key => {
            if (key === 'country' && json[key] ==='Country of work') valid = false;
            if (key === 'maritalStatus' && json[key] ==='Marital status') valid = false;
            if(!json[key]) valid = false;
        });

        return valid;
    }

    const submitForm = () => {
        if (validation ())
            console.log(JSON.stringify(json));
    }

    return (
        <div className={`${className} Form-wrapper`}>
            {
                Object.keys(rows).map(id => {
                    switch(rows[id].type) {
                        case 'input':
                            return <Input className="Form-row"
                                key={`form-${id}`}
                                name={id}
                                placeholder={rows[id].name}
                                onChange={onChange}
                            />
                        case 'number':
                            return <NumberInput className="Form-row"
                                key={`form-${id}`}
                                name={id}
                                placeholder={rows[id].name}
                                onChange={onChange}
                                min={rows[id].min}
                                max={rows[id].max}
                            />
                        case 'date':
                            return <DateInput className="Form-row"
                                key={`form-${id}`}
                                name={id}
                                placeholder={rows[id].name}
                                onChange={onChange}
                            />
                        case 'dropdown':
                            return <Dropdown className="Form-row"
                                key={`form-${id}`}
                                name={id}
                                placeholder={rows[id].name}
                                options={rows[id].options}
                                onChange={onChange}
                            />
                        default: return;
                    }
                })
            }
            <button
                className="Form-button"
                type="button"
                onClick={submitForm}
            >
                Send
            </button>
        </div>
    );
}

Form.propTypes = {
    rows: PropTypes.object.isRequired
};

export default Form;
