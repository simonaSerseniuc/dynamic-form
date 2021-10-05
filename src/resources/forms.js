import { countries } from './countries';

const baseInformation = {
    country: { name: 'Country of work', type: 'dropdown', options: countries },
    firstName: { name: 'First name', type: 'input' },
    lastName: { name: 'Last Name', type: 'input' },
    birthDate: { name: 'Date of birth', type: 'date' },
    holidayAllowance: { name: 'Holiday allowance', type: 'number' }
};

export const spainInformation = {
    ...baseInformation,
    maritalStatus: { name: 'Marital status', type: 'dropdown', options: ['Married', 'Widowed', 'Separated', 'Divorced', 'Single'] },
    socialInsuranceNumber: { name: 'Social insurance number', type: 'input' },
    holidayAllowance: { name: 'Holiday allowance', type: 'number', min: 31 },
};

export const ghanaInformation = {
    ...baseInformation,
    maritalStatus: { name: 'Marital status', type: 'dropdown', options: ['Married', 'Widowed', 'Separated', 'Divorced', 'Single'] },
    numberChildren: { name: 'Number of children', type: 'input' },
};

export const brazilInformation = {
    ...baseInformation,
    workingHours: { name: 'Working hours', type: 'number' },
    holidayAllowance: { name: 'Social insurance number', type: 'number', max: 40 },
};
