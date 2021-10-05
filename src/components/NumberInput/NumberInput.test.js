import { render, screen } from '@testing-library/react';
import NumberInput from './NumberInput';

test('NumberInput renders', () => {
    render(<NumberInput
        name='number'
        placeholder='placeholder'
        onChange={()=>{}}
    />);

    // screen.logTestingPlaygroundURL();
    expect(screen.getAllByTestId('form-input-number').length).toEqual(1);
});
