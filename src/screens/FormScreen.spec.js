import React from 'react';
import {render} from '@testing-library/react-native';
import {FormScreen} from './FormScreen';

// * Create an item
// * Check input data is valid

it('Should create a submission', () => {
  const {getByText, getByPlaceholder} = render(<FormScreen />);

  const addItemButton = getByText('Submit');
  const textInput = getByPlaceholderText('Your first name');

  const createdItemText = 'Andrés';

  fireEvent.changeText(textInput, createdItemText);
  fireEvent.press(addItemButton);

  const createdItem = getByText(createdItemText);

  expect(createdItem).not.toBeNull();
});

// it('Should display an error when trying to create an item without any text', () => {
//   const {getByText} = render(<Submit />);
//   const addItemButton = getByText('Submit');
//   fireEvent.press(addItemButton);
//   const errorMessage = getByText('Please insert a valid text');
//   const textInput = getByPlaceholderText('');
//   expect(errorMessage).not.toBeNull();
// });
