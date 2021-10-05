import { useState } from 'react';
import logo from '../../logo.svg';
import Form from '../../components/Form/Form.js';
import Dropdown from '../../components/Dropdown/Dropdown.js';
import './App.css';
import { spainInformation as spain,
    ghanaInformation as ghana,
    brazilInformation as brazil
} from '../../resources/forms.js';
import { countries } from '../../resources/countries.js';

function App() {
    const countryMap = { spain, ghana, brazil };

    const [country, setCountry] = useState(null);

    const onCountryChange = ({ target }) => {
        const { value } = target;
        setCountry(value.toLowerCase());
    }

    return (
        <div className="App">
            <Dropdown className="App-dropdown-country"
                name='countryForm'
                placeholder={'Select a country'}
                options={countries}
                onChange={onCountryChange}
            />
            {
                ['spain', 'ghana', 'brazil'].includes(country) ?
                    <Form className="App-form" rows={countryMap[country]} />
                : <p>Form not available yet</p>
            }
        </div>
    );
}

export default App;
