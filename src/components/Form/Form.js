import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input/Input.tsx';
import NumberInput from '../NumberInput/NumberInput.js';
import DateInput from '../DateInput/DateInput.js';
import Dropdown from '../Dropdown/Dropdown.js';
import './Form.css';

function Form({ rows, className }) {
    const [json, setJson] = useState({});
    const [valid, setValid] = useState(null);

    const onChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        setValid(null);
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
        if (validation ()) {
            console.log(JSON.stringify(json));
        } else {
            setValid(false);
        }
    }

    return (
        <div className={`${className} Form-wrapper`}>
            <div className="Form-fields">
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
            </div>
            <button
                className="Form-button"
                type="button"
                onClick={submitForm}
            >
                Send
            </button>
            {
                (valid === false) &&
                    <p className="Form-invalid-message"> Form is not valid</p>
            }
        </div>
    );
}

Form.propTypes = {
    rows: PropTypes.object.isRequired
};

export default Form;
