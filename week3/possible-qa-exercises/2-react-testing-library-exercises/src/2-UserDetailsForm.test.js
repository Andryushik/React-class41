import { render, screen, fireEvent } from '@testing-library/react';

import UserDetailsForm from './2-UserDetailsForm';

/**
 * UserDetailsForm is a component that has some user interaction so is a little more complex.
 *
 * A nice way of thinking about what to test is to look at the steps the user can take when they interact with this component. So:
 * - Read the current information (check that this is correct based on the prop)
 * - Change a field (check that the changes are applied in the UI)
 * - Click on the Submit button (check that the fields are sent to the function)
 */

const testUser = {
  firstName: 'John',
  lastName: 'Doe',
  role: 'Admin',
};
const changedUser = {
  firstName: 'Mary',
  lastName: 'Williams',
  role: 'User',
};
const mockOnSubmit = jest.fn();

describe('UserDetailsForm', () => {
  it('Correctly fills in the initial values', () => {
    render(
      <UserDetailsForm initialUserValues={testUser} onSubmit={mockOnSubmit} />,
    );

    const inputElementFN = screen.getByLabelText('First name:');
    const inputElementLN = screen.getByLabelText('Last name:');
    const inputElementRole = screen.getByLabelText('Role:');
    expect(inputElementFN.value).toBe('John');
    expect(inputElementLN.value).toBe('Doe');
    expect(inputElementRole.value).toBe('Admin');
  });

  it('Correctly changes a fields value', () => {
    render(
      <UserDetailsForm
        initialUserValues={changedUser}
        onSubmit={mockOnSubmit}
      />,
    );
    const inputElementFN = screen.getByLabelText('First name:');
    const inputElementLN = screen.getByLabelText('Last name:');
    const inputElementRole = screen.getByLabelText('Role:');
    expect(inputElementFN.value).toBe('Mary');
    expect(inputElementLN.value).toBe('Williams');
    expect(inputElementRole.value).toBe('User');
  });

  it('Correctly changes upon filling up', () => {
    render(
      <UserDetailsForm initialUserValues={testUser} onSubmit={mockOnSubmit} />,
    );

    const inputElementFN = screen.getByLabelText('First name:');
    fireEvent.change(inputElementFN, { target: { value: 'Mary' } });
    expect(inputElementFN.value).toBe('Mary');
  });

  it('Submits the right values to the onSubmit function', () => {
    render(
      <UserDetailsForm initialUserValues={testUser} onSubmit={mockOnSubmit} />,
    );
    const submitButton = screen.getByRole('button');
    fireEvent.click(submitButton);

    expect(mockOnSubmit.mock.calls).toEqual([[testUser]]);
  });
});
