import React from 'react';
import { render } from '@testing-library/react';
import { Form } from 'components';

jest.mock('react-router-dom');

describe('<Form/> renders properly', () => {
  it('with data', () => {
    const { container, getByText, getByPlaceholderText } = render(
      <Form>
        <Form.Title>Sign</Form.Title>
        <Form.Base>
          <Form.Input placeholder="First Name" />
          <Form.Submit disabled type="submit">
            Sign Up
          </Form.Submit>
          <Form.Text>
            Already a user? <Form.Link to="/signin">Sign in now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>This page is protected by Google</Form.TextSmall>
        </Form.Base>
      </Form>,
    );

    expect(getByText('This page is protected by Google')).toBeTruthy();
    expect(getByText('Sign')).toBeTruthy();
    expect(getByText('Sign Up').disabled).toBeTruthy();
    expect(getByPlaceholderText('First Name')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('with an error', () => {
    const error = 'You name not match pattern';
    const { container, getByText, queryByText } = render(
      <Form>
        <Form.Error>{error}</Form.Error>
        <Form.Submit type="submit">Sign In</Form.Submit>
      </Form>,
    );

    expect(getByText(error)).toBeTruthy();
    expect(queryByText('Sign In').disabled).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
