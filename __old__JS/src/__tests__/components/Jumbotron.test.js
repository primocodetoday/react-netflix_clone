import React from 'react';
import { render, screen } from '@testing-library/react';
import { Jumbotron } from 'components';
import jumboData from 'constants/jumboData.json';

jest.mock('react-router-dom');

describe.skip('<Jumbotron/> renders properly', () => {
  it('with data', () => {
    const { container } = render();
  });
});
